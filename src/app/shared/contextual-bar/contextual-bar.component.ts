import { CdkPortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ContextualBarService } from './contextual-bar.service';

@Component({
  selector: 'toh-contextual-bar',
  template: `<ng-template #content><ng-content></ng-content></ng-template>`,
  styleUrls: ['./contextual-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextualBarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('content') content: TemplateRef<any> | null = null;

  constructor(private viewContainerRef: ViewContainerRef, private service: ContextualBarService) {}

  close(): void {
    this.service.close();
  }

  ngAfterViewInit(): void {
    if (!this.content) throw new Error("Content of 'ContextualBarComponent' cannot be empty.");
    this.service.open(new CdkPortal(this.content, this.viewContainerRef));
  }

  ngOnDestroy(): void {
    this.close();
  }
}
