import { Injectable } from '@angular/core';
import { Trainer } from '../../shared/models/trainer.model';

@Injectable({
  providedIn: 'root',
})
export class DisciplineService {
  trainers: Trainer[] = [
    { id: 1, name: 'Juan Pérez', imageUrl: '/assets/trainers/juan.png' },
    { id: 2, name: 'Akira Tanaka', imageUrl: '/assets/trainers/akira.png' },
    { id: 3, name: 'Lucía Fernández', imageUrl: '/assets/trainers/lucia.png' },
  ];
  
  getTrainers(): Trainer[] {
    return this.trainers;
  }
}
