import { Routes } from '@angular/router';
import { SportComponent } from './views/sport/sport.component';
import { SlotComponent } from './views/slot/slot.component';
import { LiveComponent } from './views/live/live.component';
import { CasinoComponent } from './views/casino/casino.component';

export const routes: Routes = [
  { path: '', redirectTo: 'slots', pathMatch: 'full' },
  { path: 'sport', component: SportComponent },
  { path: 'live', component: LiveComponent },
  { path: 'slots', component: SlotComponent },
  { path: 'casino', component: CasinoComponent },
];
