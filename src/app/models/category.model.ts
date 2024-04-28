import { Game } from './game.model';

export interface Category {
  name: string;
  category: string;
  icon: string;
  games: Game[];
  totalGames: number;
}
