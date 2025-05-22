import { TestBed } from '@angular/core/testing';

import { FightersService } from './fighters.service';

describe('Given FightersService', () => {
  let service: FightersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightersService);
  });

  it('When should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('When getFighterById is called', () => {
    it('Then should return array of fighters for a valid discipline', () =>{
      const discipline = 'mma';
      const fighters = service.getFightersByDiscipline(discipline);
      expect(fighters.length).toBeGreaterThan(0);
    })
  });
  describe('When getFighterById is called', () => {
    it('Then should return undefined for an invalid id', () =>{
      const id = 'invalid-id';
      const invalidFighterId = service.getFighterById(id);

      const knownFighter = service.getFightersByDiscipline('mma')[0];
      const knownFighterId = knownFighter.id;

      expect(invalidFighterId).toBeUndefined();
      expect(knownFighterId).toBeDefined();
    })
  });

  describe('When getFighterCareerById is called', () => {
    it('Then should return career array of the fighter', () =>{
      const knownFighter = service.getFightersByDiscipline('mma')[0];
      const knownFighterId = knownFighter.id;
      const career = service.getFighterCareerById(knownFighterId);
      expect(career).toEqual([]);
    })
  })
});
