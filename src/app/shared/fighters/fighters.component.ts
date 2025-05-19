import { Component, Input, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Fighter } from '../models/fighter.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Router } from '@angular/router';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-fighters',
  imports: [RouterModule],
  templateUrl: './fighters.component.html',
  styleUrl: './fighters.component.scss',
})
export class FightersComponent {
  profesional = true;
  @Input() fighters: Fighter[] = [];

  constructor(private router: Router) {}

  

  toggleProfesional() {
    this.profesional = !this.profesional;
  }

  get filteredFighters() {
    return this.fighters.filter(
      (fighter) => fighter.profesional === this.profesional
    );
  }
}
