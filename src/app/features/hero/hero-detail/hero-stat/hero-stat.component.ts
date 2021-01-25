import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'toh-hero-stat',
  templateUrl: './hero-stat.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroStatComponent {
  @Input() label = '';
  @Input() value: number | null = null;
}
