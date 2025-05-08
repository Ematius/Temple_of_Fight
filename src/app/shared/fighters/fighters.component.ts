import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Fighter } from '../models/fighter.model';


@Component({
  selector: 'app-fighters',
  imports: [RouterModule],
  templateUrl: './fighters.component.html',
  styleUrl: './fighters.component.scss',
})

export class FightersComponent {
  @Input()  fighters: Fighter[] = []

}
