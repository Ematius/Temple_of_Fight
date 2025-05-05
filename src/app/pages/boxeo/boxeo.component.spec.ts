import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxeoComponent } from './boxeo.component';

describe('BoxeoComponent', () => {
  let component: BoxeoComponent;
  let fixture: ComponentFixture<BoxeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
