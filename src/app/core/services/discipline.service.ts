import { Injectable } from '@angular/core';
import { Trainer } from '../../shared/models/trainer.model';

@Injectable({
  providedIn: 'root',
})
export class DisciplineService {
  trainers: Trainer[] = [
    { id: 1, name: 'Bene', imageUrl: '/assets/trainers/bene.webp', discipline:'mma' },
    { id: 2, name: 'Deif', imageUrl: '/assets/trainers/deif.webp', discipline:'mma' },

  ];

  getTrainersByDiscipline(discipline:string): Trainer[] {
    return this.trainers.filter( trainer => trainer.discipline === discipline)
  }
}
