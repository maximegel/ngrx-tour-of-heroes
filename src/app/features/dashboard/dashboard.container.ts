import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'toh-dashboard',
  templateUrl: './dashboard.container.html',
  styleUrls: ['./dashboard.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainer implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
