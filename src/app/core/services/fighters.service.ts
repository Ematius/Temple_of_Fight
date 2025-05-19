import { Injectable } from '@angular/core';
import { Fighter } from '../../shared/models/fighter.model';
import { Fights } from '../../shared/models/fights.model';
import { Discipline } from '../../shared/models/discipline.model';
import { discipline } from '../data/discipline.data';



@Injectable({
  providedIn: 'root',
})
export class FightersService {

  private discipline: Discipline = discipline;

  getFightersByDiscipline(discipline: keyof Discipline): Fighter[] {
    return this.discipline[discipline];
  }
  getFighterById(id: string): Fighter | undefined {
    return Object.values(this.discipline)
      .flat()
      .find((fighter) => fighter.id === id);
  }
  getFighterCareerById(id: string): Fights[] {
    const fighter = this.getFighterById(id);
    return fighter ? fighter.career : [];
  }
}
