import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../shared/models/trainer.model';
import { Fighter } from '../../shared/models/fighter.model';
import { DisciplineService } from '../../core/services/discipline.service';
import { DisciplineComponent } from '../../shared/discipline/discipline.component';
import { FightersComponent } from '../../shared/fighters/fighters.component';
import { FightersService } from '../../core/services/fighters.service';

@Component({
  selector: 'app-muay-thai',
  imports: [DisciplineComponent, FightersComponent],
  templateUrl: './muay-thai.component.html',
  styleUrl: './muay-thai.component.scss',
})
export class MuayThaiComponent implements OnInit {
  disciplineName: string = 'Muay Thai';
  trainers: Trainer[] = [];
  fighters: Fighter[] = [];

  constructor(
    private disciplineService: DisciplineService,
    private FightersService: FightersService
  ) {}

  ngOnInit(): void {
    this.trainers = this.disciplineService.getTrainersByDiscipline('muaythai');
    this.fighters = this.FightersService.getFightersByDiscipline('muaythai');
  }
}

