import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeroConnections } from './hero-connections.model';

@Component({
  selector: 'toh-hero-connections',
  templateUrl: './hero-connections.component.html',
  styleUrls: ['./hero-connections.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroConnectionsComponent {
  @Input() model: HeroConnections | null = null;
}
