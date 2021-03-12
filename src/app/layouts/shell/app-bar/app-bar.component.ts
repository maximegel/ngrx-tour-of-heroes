import { Portal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, skipWhile, takeUntil } from 'rxjs/operators';
import { AppBarService } from './app-bar.service';

@Component({
  selector: 'toh-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarComponent implements OnInit, OnDestroy {
  @Output() contextualClosed = new EventEmitter<void>();
  contextualContent$: Observable<Portal<any> | null>;
  @Output() contextualOpened = new EventEmitter<void>();

  private destroy$ = new Subject<any>();

  constructor(service: AppBarService) {
    this.contextualContent$ = service.contextualBarChanges;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.contextualContent$
      .pipe(
        // Ignore changes until the contextual bar has been opened for the first time.
        skipWhile(content => !content),
        filter(content => !content),
        takeUntil(this.destroy$),
      )
      .subscribe(() => this.contextualClosed.emit());
    this.contextualContent$
      .pipe(
        filter(content => !!content),
        takeUntil(this.destroy$),
      )
      .subscribe(() => this.contextualOpened.emit());
  }
}
