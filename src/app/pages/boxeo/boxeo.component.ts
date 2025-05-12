import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../shared/models/trainer.model';
import { Fighter } from '../../shared/models/fighter.model';
import { DisciplineService } from '../../core/services/discipline.service';
import { DisciplineComponent } from '../../shared/discipline/discipline.component';
import { FightersComponent } from '../../shared/fighters/fighters.component';
import { FightersService } from '../../core/services/fighters.service';

@Component({
  selector: 'app-boxeo',
  imports: [DisciplineComponent, FightersComponent],
  templateUrl: './boxeo.component.html',
  styleUrl: './boxeo.component.scss',
})
export class BoxeoComponent implements OnInit {
  disciplineName: string = 'Boxeo';
  trainers: Trainer[] = [];
  fighters: Fighter[] = [];

  constructor(
    private disciplineService: DisciplineService,
    private FightersService: FightersService
  ) {}

  ngOnInit(): void {
    this.trainers = this.disciplineService.getTrainersByDiscipline('boxeo');
    this.fighters = this.FightersService.getFightersByDiscipline('boxeo');
  }
}
