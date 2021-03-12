import { CdkPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AppBarService, ContextualBarRef } from '~shell';

@Component({
  selector: 'toh-contextual-bar',
  template: `<ng-template #content><ng-content></ng-content></ng-template>`,
  styleUrls: ['./contextual-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextualBarComponent<D = any> implements AfterViewInit {
  @ViewChild('content') content: TemplateRef<any> | null = null;
  private contextualBar: ContextualBarRef | null = null;

  constructor(private viewContainerRef: ViewContainerRef, private appBar: AppBarService) {}

  afterClosed(): Observable<D> {
    if (!this.contextualBar) throw new Error("afterClosed can't be invoked before view init.");
    return this.contextualBar.afterClosed();
  }

  beforeClosed(): Observable<D> {
    if (!this.contextualBar) throw new Error("beforeClosed can't be invoked before view init.");
    return this.contextualBar.beforeClosed();
  }

  close(data?: D): void {
    if (!this.contextualBar) throw new Error("close can't be invoked before view init.");
    this.contextualBar.close(data);
  }

  ngAfterViewInit(): void {
    if (!this.content) throw new Error("content can't be null.");
    this.contextualBar = this.appBar.openContextualBar(new CdkPortal(this.content, this.viewContainerRef));
  }
}
