import { Injectable } from '@angular/core';
import { Trainer } from '../../shared/models/trainer.model';

@Injectable({
  providedIn: 'root',
})
export class DisciplineService {
  trainers: Trainer[] = [
    { id: 1, name: 'boxeo', imageUrl: '/assets/trainers/akira.jpg', discipline:'boxeo' },
    { id: 2, name: 'Akira Tanaka', imageUrl: '/assets/trainers/akira.jpg', discipline:'boxeo' },
    { id: 3, name: 'Lucía Fernández', imageUrl: '/assets/trainers/akira.jpg', discipline:'boxeo' },
    { id: 1, name: 'muay thai', imageUrl: '/assets/trainers/akira.jpg', discipline:'muaythai' },
    { id: 2, name: 'Akira Tanaka', imageUrl: '/assets/trainers/akira.jpg', discipline:'muaythai' },
    { id: 3, name: 'Lucía Fernández', imageUrl: '/assets/trainers/akira.jpg', discipline:'muaythai' },
    { id: 1, name: 'mma', imageUrl: '/assets/trainers/akira.jpg', discipline:'mma' },
    { id: 2, name: 'Akira Tanaka', imageUrl: '/assets/trainers/akira.jpg', discipline:'mma' },
    { id: 3, name: 'Lucía Fernández', imageUrl: '/assets/trainers/akira.jpg', discipline:'mma' },
  ];

  getTrainersByDiscipline(discipline:string): Trainer[] {
    return this.trainers.filter( trainer => trainer.discipline === discipline)
  }
}
