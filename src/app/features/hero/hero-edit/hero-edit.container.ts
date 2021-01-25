import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'toh-hero-edit',
  templateUrl: './hero-edit.container.html',
  styleUrls: ['./hero-edit.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroEditContainer {
  constructor() {}
}
