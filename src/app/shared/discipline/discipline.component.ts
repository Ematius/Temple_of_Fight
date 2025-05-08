import { Component, Input } from '@angular/core';
import { Trainer } from '../models/trainer.model';

@Component({
  selector: 'app-discipline',
  imports: [],
  templateUrl: './discipline.component.html',
  styleUrl: './discipline.component.scss',
})
export class DisciplineComponent {
  @Input() disciplineName: string = '';
  @Input() trainers: Trainer[] = [];

}
