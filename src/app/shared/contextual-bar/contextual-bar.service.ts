import { Portal } from '@angular/cdk/portal';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ContextualBarService implements OnDestroy {
  private afterClosed$ = new Subject<void>();
  private afterOpened$ = new Subject<void>();
  private beforeClosed$ = new Subject<void>();
  private beforeOpened$ = new Subject<void>();
  private portal$ = new BehaviorSubject<ContextualBarPortal>(null);

  /** Gets an observable that indicates if the contextual bar is opened. */
  get openedChanges(): Observable<boolean> {
    return this.portal$.pipe(map(portal => !!portal));
  }

  /** Gets an observable is notified when the contextual bar portal changes. */
  get portalChanges(): Observable<ContextualBarPortal> {
    return this.portal$.asObservable();
  }

  /** Gets an observable that is notified when the contextual bar has finished closing. */
  afterClosed(): Observable<void> {
    return this.afterClosed$.asObservable();
  }

  /** Gets an observable that is notified when the contextual bar has finished opening. */
  afterOpened(): Observable<void> {
    return this.afterOpened$.asObservable();
  }

  /** Gets an observable that is notified when the contextual bar has started closing. */
  beforeClosed(): Observable<void> {
    return this.afterClosed$.asObservable();
  }

  /** Gets an observable that is notified when the contextual bar has started opening. */
  beforeOpened(): Observable<void> {
    return this.beforeOpened$.asObservable();
  }

  /** Closes the contextual bar. */
  close(): ContextualBarService {
    this.beforeClosed$.next();
    this.portal$.next(null);
    this.afterClosed$.next();
    return this;
  }

  ngOnDestroy(): void {
    this.beforeClosed$.complete();
    this.afterClosed$.complete();
  }

  /** Opens the contextual bar. */
  open(portal: Portal<any>): ContextualBarService {
    this.portal$.next(portal);
    return this;
  }
}

export type ContextualBarPortal = Portal<unknown> | null;
