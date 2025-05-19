import { Discipline } from '../../shared/models/discipline.model';
import { disciplineMma } from './discipline-mma.data';
import { disciplineBoxeo } from './discipline-boxeo.data';
import { disciplineMuayThai } from './discipline-muaythai.data';


export const discipline: Discipline = {
  mma: disciplineMma,
  boxeo: disciplineBoxeo,
  muaythai: disciplineMuayThai,
};
