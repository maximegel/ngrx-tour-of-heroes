import { Portal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppBarService {
  readonly contextualBarChanges: Observable<Portal<any> | null>;
  private readonly contextualBar$ = new BehaviorSubject<Portal<any> | null>(null);

  constructor() {
    this.contextualBarChanges = this.contextualBar$;
  }

  closeContextualBar(): void {
    this.contextualBar$.next(null);
  }

  openContextualBar<D = any>(portal: Portal<D>): ContextualBarRef<D> {
    this.contextualBar$.next(portal);
    return new ContextualBarRef<D>(this);
  }
}

export class ContextualBarRef<D = any> {
  private afterClosed$ = new Subject<any>();
  private beforeClosed$ = new Subject<any>();

  constructor(private appBar: AppBarService) {}

  /** Gets an observable that is notified when the contextual bar is finished closing. */
  afterClosed(): Observable<D> {
    return this.afterClosed$.asObservable();
  }

  /** Gets an observable that is notified when the contextual bar has started closing. */
  beforeClosed(): Observable<D> {
    return this.afterClosed$.asObservable();
  }

  /**
   * Closes the contextual bar.
   * @param data Data to be passed back to the contextual bar opener.
   */
  close(data?: D): void {
    this.beforeClosed$.next(data);
    this.appBar.closeContextualBar();
    this.afterClosed$.next(data);

    this.beforeClosed$.complete();
    this.afterClosed$.complete();
  }
}
