import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'mma',
    loadComponent: () =>
      import('./pages/mma/mma.component').then((c) => c.MmaComponent),
  },
  {
    path: 'boxeo',
    loadComponent: () =>
      import('./pages/boxeo/boxeo.component').then((c) => c.BoxeoComponent),
  },
  {
    path: 'muay-thai',
    loadComponent: () =>
      import('./pages/muay-thai/muay-thai.component').then(
        (c) => c.MuayThaiComponent
      ),
  },
  { path: '**', redirectTo: 'home' },
];
