import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'toh-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  breakpoints$: Observable<Record<'xs', boolean>>;
  @Input() loading = false;

  constructor(media: BreakpointObserver) {
    this.breakpoints$ = media
      .observe([Breakpoints.XSmall])
      .pipe(map(res => ({ xs: res.breakpoints[Breakpoints.XSmall] })));
  }
}
