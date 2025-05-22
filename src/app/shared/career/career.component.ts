import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FightersService } from '../../core/services/fighters.service';
import { ActivatedRoute } from '@angular/router';
import { Fights } from '../models/fights.model';
import { Fighter } from '../models/fighter.model';
import{ gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-career',
  imports: [],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent implements OnInit, AfterViewInit {

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
            x: 5,
            duration: 0.6,
            ease: 'power2.out',
          }),
        onLeaveBack: () =>
          gsap.to(infoEl as Element, {
            opacity: 0,
            x: -150,
            duration: 0.4,
            ease: 'power2.in',
          }),
      });
    });
    this.route.fragment.subscribe((fragment) => {
      if (fragment === 'career') {
        setTimeout(() => {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: '#career-top', offsetY: 0 },
            ease: 'power2.inOut',
          });
        }, 0); // espera al siguiente ciclo de render
      }
    });
  }
  
}
