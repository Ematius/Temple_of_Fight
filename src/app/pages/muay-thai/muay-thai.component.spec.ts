import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuayThaiComponent } from './muay-thai.component';

describe('MuayThaiComponent', () => {
  let component: MuayThaiComponent;
  let fixture: ComponentFixture<MuayThaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuayThaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuayThaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
