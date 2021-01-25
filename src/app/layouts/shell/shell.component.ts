import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'toh-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  breakpoints$: Observable<Record<'sm', boolean>>;
  @Input() loading: boolean | null = false;

  constructor(media: BreakpointObserver) {
    this.breakpoints$ = media.observe([Breakpoints.XSmall, Breakpoints.Small]).pipe(
      map(res => ({
        xs: res.breakpoints[Breakpoints.XSmall],
        sm: res.breakpoints[Breakpoints.Small] || res.breakpoints[Breakpoints.XSmall],
      })),
    );
  }
}

@Directive({ selector: 'toh-shell-nav' })
export class ShellNavDirective {}

@Directive({ selector: 'toh-shell-content' })
export class ShellContentDirective {}
