import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { appUrls } from './app.urls';

@Component({
  selector: 'toh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading$: Observable<boolean>;
  urls = appUrls;

  constructor(router: Router) {
    this.loading$ = router.events.pipe(
      filter(
        e =>
          e instanceof NavigationStart ||
          e instanceof NavigationEnd ||
          e instanceof NavigationCancel ||
          e instanceof NavigationError,
      ),
      map(e => e instanceof NavigationStart),
      // Do not show the loading indicator if the page takes less than 300ms to load.
      debounceTime(300),
    );
  }
}
