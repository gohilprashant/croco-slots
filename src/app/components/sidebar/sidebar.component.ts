import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [SvgIconComponent, RouterModule],
})
export class SidebarComponent {
  menuItems = [
    { label: 'Sport', icon: 'sport', link: 'sport' },
    { label: 'Live', icon: 'live', link: 'live' },
    { label: 'Slots', icon: 'slot', link: 'slots' },
    { label: 'Casino', icon: 'casino', link: 'casino' },
  ];
}
