import { Component, Input } from '@angular/core';
import { Game } from '../../models/game.model';
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'app-game-card',
  standalone: true,
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
  imports: [ChipComponent],
})
export class GameCardComponent {
  @Input() game!: Game;
}
