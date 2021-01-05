import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.container.html',
  styleUrls: ['./heroes.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesContainer implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
