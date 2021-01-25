import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroTable, HeroTableRow } from './hero-table.model';

@Component({
  selector: 'toh-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroTableComponent {
  @Output() delete = new EventEmitter<HeroTableRow>();
  @Output() detail = new EventEmitter<HeroTableRow>();
  displayedColumns = ['name', 'alterEgo', 'actions'];
  @Output() edit = new EventEmitter<HeroTableRow>();
  @Input() model: HeroTable | null = [];
}
