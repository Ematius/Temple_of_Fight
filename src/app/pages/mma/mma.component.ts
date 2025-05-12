import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../shared/models/trainer.model';
import { Fighter } from '../../shared/models/fighter.model';
import { DisciplineService } from '../../core/services/discipline.service';
import { DisciplineComponent } from '../../shared/discipline/discipline.component';
import { FightersComponent } from '../../shared/fighters/fighters.component';
import { FightersService } from '../../core/services/fighters.service';

@Component({
  selector: 'app-mma',
  imports: [DisciplineComponent, FightersComponent],
  templateUrl: './mma.component.html',
  styleUrl: './mma.component.scss',
})
export class MmaComponent implements OnInit {
  disciplineName: string = 'MMA';
  trainers: Trainer[] = [];
  fighters: Fighter[] = [];

  constructor(
    private disciplineService: DisciplineService,
    private FightersService: FightersService
  ) {}

  ngOnInit(): void {
    this.trainers = this.disciplineService.getTrainersByDiscipline('mma');
    this.fighters = this.FightersService.getFightersByDiscipline('mma');
  }
}
