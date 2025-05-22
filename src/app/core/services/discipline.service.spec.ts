import { TestBed } from '@angular/core/testing';

import { DisciplineService } from './discipline.service';


describe('Given disciplineService', () => {
  let service: DisciplineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplineService);
  });

  it('Then should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('When getTrainersByDiscipline is used', () => {
    it('Then should return trainers matching the given disciple', () => {
      const disciplineMma = 'mma';
      const result = service.getTrainersByDiscipline(disciplineMma);
      expect(result.every(trainer => trainer.discipline === disciplineMma)).toBe(true);
    });
  })
});
