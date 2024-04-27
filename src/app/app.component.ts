import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SidebarComponent],
  providers: [],
})
export class AppComponent {
  title = 'crocobet-demo';
  count = signal(0);

  constructor() {}

  updateCount() {
    this.count.update((val) => val + 1);
  }
}
