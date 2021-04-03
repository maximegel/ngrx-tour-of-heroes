import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContextualBarService } from '~shared/contextual-bar/contextual-bar.service';

@Component({
  selector: 'toh-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarComponent {
  @Output() contextualClosed = new EventEmitter<void>();
  @Output() contextualOpened = new EventEmitter<void>();
  contextualVisible$: Observable<boolean>;

  constructor(contextualBar: ContextualBarService) {
    this.contextualVisible$ = contextualBar.portalChanges.pipe(map(portal => !!portal));
  }
}
