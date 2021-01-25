import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroHeader } from './hero-header.model';

@Component({
  selector: 'toh-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroHeaderComponent {
  @Input() model: HeroHeader | null = null;
}
