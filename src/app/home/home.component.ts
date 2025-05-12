import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // ngAfterViewInit() {
  //   const title = new SplitType('#title-text', { types: 'chars' });
  //   const complement = new SplitType('#complement-text', { types: 'chars' });

  //   const t1 = gsap.timeline();

  //   t1.from(['#top-gradient', '#bottom-gradient'], {
  //     duration: 0.7,
  //     ease: 'power3.inOut',
  //     filter: 'blur(0px)',
  //     opacity: 0,
  //   })
  //     .from(
  //       '#primary-filter',
  //       {
  //         duration: 0.8,
  //         opacity: 0,
  //         scale: 3,
  //       },
  //       '-=0.5'
  //     )
  //     .to('#primary-filter', {
  //       duration: 0.25,
  //       opacity: 0,
  //       scale: 3,
  //     })
  //     .to(
  //       ['#top-gradient', '#bottom-gradient'],
  //       {
  //         duration: 0.3,
  //         filter: 'blur(0px)',
  //         opacity: 0,
  //       },
  //       '-=1'
  //     )
  //     .set('#logo', { opacity: 1 })
  //     .from(title.chars, {
  //       duration: 0.2,
  //       ease: 'back',
  //       filter: 'blur(0.3em)',
  //       opacity: 0,
  //       scale: 1.5,
  //       stagger: 0.02,
  //     })
  //     .from(complement.chars, {
  //       duration: 0.2,
  //       delay: 0.25,
  //       filter: 'blur(0.3em)',
  //       opacity: 0,
  //       scale: 0.5,
  //       stagger: 0.02,
  //       xPercent: -25,
  //     })
  //     .from(
  //       '#logo-border',
  //       {
  //         duration: 0.4,
  //         ease: 'power3.out',
  //         opacity: 0,
  //         scale: 0.75,
  //       },
  //       '-=1'
  //     )
  //     .from(
  //       '#logo-border-inner',
  //       {
  //         duration: 0.4,
  //         ease: 'power3.out',
  //         scale: 0.75,
  //       },
  //       '-=1'
  //     )
  //     .to(
  //       '#logo',
  //       {
  //         duration: 1.5,
  //         scale: 1.1,
  //       },
  //       '-=0.2'
  //     )
  //     .to(
  //       ['#logo-border', '#logo-border-inner'],
  //       {
  //         duration: 1.5,
  //         ease: 'power3.out',
  //         scale: 1.1,
  //       },
  //       '-=1'
  //     )
  //     .to(
  //       '#logo-border',
  //       {
  //         duration: 1.25,
  //         ease: 'power4.in',
  //         scale: 8,
  //       },
  //       '-=0.5'
  //     )
  //     .to(
  //       '#logo-border-inner',
  //       {
  //         duration: 0.5,
  //         ease: 'power4.in',
  //         scale: 8,
  //       },
  //       '-=0.6'
  //     )
  //     .to(
  //       '#logo',
  //       {
  //         duration: 0.25,
  //         opacity: 0,
  //         scale: 1.2,
  //       },
  //       '-=0.5'
  //     )
  //     .to(
  //       '#logo',
  //       {
  //         duration: 0.25,
  //         opacity: 0,
  //         scale: 1.2,
  //         onComplete: () => {
  //           const intro = document.getElementById('intro-animation');
  //           const main = document.getElementById('main-content');

  //           if (intro && main) {
  //             intro.style.display = 'none';
  //             main.style.display = 'block';
  //             main.style.opacity = '1';
  //             main.style.transform = 'translateY(0)';
  //           }
  //         },
  //       },
  //       '-=0.5'
  //     );
  // }


}
