import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  message: string;

  collapsed(): void {
    this.message = 'collapsed';
  }

  expanded(): void {
    this.message = 'expanded';
  }
}
