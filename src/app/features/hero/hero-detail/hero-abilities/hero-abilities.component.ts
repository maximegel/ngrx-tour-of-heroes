import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroAbilities } from './hero-abilities.model';

@Component({
  selector: 'toh-hero-abilities',
  templateUrl: './hero-abilities.component.html',
  styleUrls: ['./hero-abilities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroAbilitiesComponent {
  @Input() model: HeroAbilities | null = [];
}
