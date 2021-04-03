import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ContextualBarPortal, ContextualBarService } from './contextual-bar.service';

@Component({
  selector: 'toh-contextual-bar-outlet',
  template: `<ng-template [cdkPortalOutlet]="portal$ | async"></ng-template>`,
  styleUrls: ['./contextual-bar-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextualBarOutletComponent implements OnInit, OnDestroy {
  @Output() closed = new EventEmitter<void>();
  @Output() opened = new EventEmitter<void>();
  portal$: Observable<ContextualBarPortal>;

  private destroy$ = new Subject<any>();

  constructor(private service: ContextualBarService) {
    this.portal$ = service.portalChanges;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.service
      .afterClosed()
      .pipe(
        map(() => {}),
        takeUntil(this.destroy$),
      )
      .subscribe(this.closed);
    this.service
      .afterOpened()
      .pipe(
        map(() => {}),
        takeUntil(this.destroy$),
      )
      .subscribe(this.opened);
  }
}
