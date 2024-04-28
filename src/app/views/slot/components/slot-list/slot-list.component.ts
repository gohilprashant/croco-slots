import { Component, Input } from '@angular/core';
import { GameCardComponent } from '../../../../components/game-card/game-card.component';
import { Game } from '../../../../models/game.model';
import { InfoComponent } from '../../../../components/info/info.component';

@Component({
  selector: 'app-slot-list',
  standalone: true,
  templateUrl: './slot-list.component.html',
  styleUrl: './slot-list.component.scss',
  imports: [GameCardComponent, InfoComponent],
})
export class SlotListComponent {
  @Input() games: Game[] = [];
}
