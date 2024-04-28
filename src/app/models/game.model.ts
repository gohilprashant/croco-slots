export interface Game {
  game_id: string;
  name: string;
  provider: string;
  providerName: string;
  image: string;
  imageSet?: {
    webp: string;
  };
  url: string;
  order: number;
  tags: string[];
  stats: any[];
  favoriteCount: number;
  gameId: string;
  image2: string;
}
