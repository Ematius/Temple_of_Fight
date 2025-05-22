import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

fdescribe('Given HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, CommonModule, RouterModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('Then should create', () => {
    expect(component).toBeTruthy();
  });
  it('Then should display "Temple" in .title-text', () => {
    const title = element.querySelector('.title');
    expect(title).toContain('Temple');
  });

  it('Then should display "of Fight" in .complement-text', () =>{
    const complement = element.querySelector('.complement-text');
    expect(complement).toContain('of fight');
  })

  it('Then should render the .hero-title', () =>{
    const title = element.querySelector('.hero-title');
    const text = title?.textContent?.toLowerCase();
    expect(text).toContain('temple');
    expect(text).toContain('of fight');
  })
  it('Then should render exactly two images', () =>{
    const images = element.querySelectorAll('img');
    expect(images.length).toBe(2);
  })

  it('Then should contain 3 discipline links inside ul', () =>{
    const links = element.querySelectorAll('ul.disciplines li');
    expect(0).toBe(8);
  })

});
