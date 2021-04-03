import { ChangeDetectionStrategy, Component, Directive, HostBinding, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ContextualBarService } from './contextual-bar.service';

@Component({
  selector: 'toh-contextual-bar-container',
  template: `
    <ng-content *ngIf="opened$ | async; else defaultState" select="toh-contextual-bar-outlet"></ng-content>
    <ng-template #defaultState><ng-content select="toh-default-bar"></ng-content></ng-template>
  `,
  styleUrls: ['./contextual-bar-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ContextualBarContainerComponent {
  @HostBinding('class.toh-contextual-bar-container') class = true;
  opened$: Observable<boolean>;

  constructor(service: ContextualBarService) {
    this.opened$ = service.openedChanges;
  }
}

@Directive({ selector: 'toh-default-bar' })
export class DefaultBarDirective {
  @HostBinding('class.toh-default-bar') class = true;
}
