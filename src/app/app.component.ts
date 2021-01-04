import { Component } from '@angular/core';

@Component({
  selector: 'toh-root',
  template: `
    <h1>Tour of Heroes</h1>
    <nav>
      <button mat-button color="primary">Dashboard</button>
      <button mat-button color="primary">Heroes</button>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [],
})
export class AppComponent {}
