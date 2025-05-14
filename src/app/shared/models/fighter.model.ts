import { Fights } from './fights.model';

export interface Fighter {
  id: string;
  name: string;
  imageUrl: string;
  height: string;
  weight: string;
  record: string;
  wins: number;
  Tko: number;
  sub: number;
  loses: number;
  draw: number;
  discipline: string;
  tapology: string;
  titles: string[];
  career: Fights[];
}
