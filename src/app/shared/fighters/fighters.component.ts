import { Component, Input, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Fighter } from '../models/fighter.model';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-fighters',
  imports: [RouterModule],
  templateUrl: './fighters.component.html',
  styleUrl: './fighters.component.scss',
})
export class FightersComponent  implements AfterViewInit {
  @Input() fighters: Fighter[] = [];

  ngAfterViewInit(): void {
    
  }
}
