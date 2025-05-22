import { Fights } from './fights.model';

export interface Fighter {
  id: string;
  name: string;
  imageUrl: string;
  height: string;
  weight: string;
  birthdate: string;
  record: string;
  wins: number;
  Tko: number;
  sub: number;
  loses: number;
  draw: number;
  profesional: boolean;
  fightsAmateur: string;
  tapology: string;
  titles: string[];
  career: Fights[];
}
