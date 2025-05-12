import { Injectable } from '@angular/core';
import { Fighter } from '../../shared/models/fighter.model';

@Injectable({
  providedIn: 'root',
})
export class FightersService {
  fighters: Fighter[] = [
    {
      id: 1,
      name: 'boxeo Tanaka',
      imageUrl: '/assets/fighters/akira.jpg',
      wins: 12,
      KOs: 9,
      loses: 1,
      draw: 0,
      discipline: 'boxeo',
    },
    {
      id: 2,
      name: 'Lucía Fernández',
      imageUrl: '/assets/fighters/akira.jpg',
      wins: 10,
      KOs: 6,
      loses: 2,
      draw: 1,
      discipline: 'boxeo',
    },
    {
      id: 3,
      name: 'Juan Pérez',
      imageUrl: '/assets/fighters/akira.jpg',
      wins: 8,
      KOs: 5,
      loses: 3,
      draw: 2,
      discipline: 'boxeo',
    },
    {
      id: 1,
      name: 'muaythai Tanaka',
      imageUrl: '/assets/fighters/akira.jpg',
      wins: 12,
      KOs: 9,
      loses: 1,
      draw: 0,
      discipline: 'muaythai',
    },
    {
      id: 2,
      name: 'Lucía Fernández',
      imageUrl: '/assets/fighters/akira.jpg',
      wins: 10,
      KOs: 6,
      loses: 2,
      draw: 1,
      discipline: 'muaythai',
    },
    {
      id: 3,
      name: 'Juan Pérez',
      imageUrl: '/assets/fighters/Nacho.jpg',
      wins: 8,
      KOs: 5,
      loses: 3,
      draw: 2,
      discipline: 'muaythai',
    },
    {
      id: 1,
      name: 'Nacho',
      imageUrl: '/assets/fighters/Nacho.jpg',
      wins: 12,
      KOs: 9,
      loses: 1,
      draw: 0,
      discipline: 'mma',
    },
    {
      id: 2,
      name: 'Lucía Fernández',
      imageUrl: '/assets/fighters/akira.jpg',
      wins: 10,
      KOs: 6,
      loses: 2,
      draw: 1,
      discipline: 'mma',
    },
    {
      id: 3,
      name: 'Juan Pérez',
      imageUrl: '/assets/fighters/akira.jpg',
      wins: 8,
      KOs: 5,
      loses: 3,
      draw: 2,
      discipline: 'mma',
    },
  ];

  getFightersByDiscipline(discipline:string): Fighter[] {
    return this.fighters.filter(
      (fighter) => fighter.discipline === discipline
    );
  }
}
