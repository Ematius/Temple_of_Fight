import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FightersService } from '../../core/services/fighters.service';
import { ActivatedRoute } from '@angular/router';
import { Fights } from '../models/fights.model';

import{ gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Fighter } from '../models/fighter.model';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnInit, AfterViewInit {
  careerLine!: ElementRef<SVGLineElement>;
  career: Fights[] = [];
  fighter: Fighter | undefined;

  spacing = 600;
  offset = 600;


  constructor(
    private fightersService: FightersService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fighter = this.fightersService.getFighterById(id);
      this.career = this.fighter?.career || [];
    }
  }

  ngAfterViewInit(): void {

    const line = document.getElementById(
      'timeline'
    ) as unknown as SVGLineElement;
    const length = line.getTotalLength();
    const infos = gsap.utils.toArray('.container-career') as Element[];


    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });
    gsap.to(line, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: '.container-svg',
        start: 'top 10%',
        end: `+=${this.career.length * this.spacing}`,
        scrub: true,
      },
    });

    infos.forEach((infoEl) => {
      ScrollTrigger.create({
        trigger: infoEl as Element,
        start: 'top center',
        toggleActions: 'play none none reverse',
        onEnter: () =>
          gsap.to(infoEl as Element, {
            opacity: 1,
            y: 100,
            x: 0,
            duration: 0.6,
            ease: 'power1.out',
          }),
        onLeaveBack: () =>
          gsap.to(infoEl as Element, {
            opacity: 0,
            x: 50,
            duration: 0.4,
            ease: 'power2.in',
          }),
      });
    });
  }
}
