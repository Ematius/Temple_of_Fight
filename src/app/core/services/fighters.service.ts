import { Injectable } from '@angular/core';
import { Fighter } from '../../shared/models/fighter.model';

@Injectable({
  providedIn: 'root',
})
export class FightersService {

  fighters: Fighter[] = [
    {
      id: 1,
      name: 'Akira Tanaka',
      imageUrl: '/assets/fighters/akira.jpg',
      ranking: 1,
      wins: 12,
      KOs: 9,
      loses: 1,
      draw: 0,
    },
    {
      id: 2,
      name: 'Lucía Fernández',
      imageUrl: '/assets/fighters/akira.jpg',
      ranking: 2,
      wins: 10,
      KOs: 6,
      loses: 2,
      draw: 1,
    },
    {
      id: 3,
      name: 'Juan Pérez',
      imageUrl: '/assets/fighters/akira.jpg',
      ranking: 3,
      wins: 8,
      KOs: 5,
      loses: 3,
      draw: 2,
    },
  ];

  getFighters(): Fighter[] {
    return this.fighters;
  };

}
