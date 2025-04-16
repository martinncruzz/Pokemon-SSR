import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@shared/layouts/main-layout/main-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@shared/pages/home-page/home-page.component'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@shared/pages/about-page/about-page.component'),
      },
      {
        path: 'pokemons',
        loadChildren: () => import('@pokemons/pokemons.routes'),
      },
      {
        path: '**',
        loadComponent: () =>
          import('@shared/pages/not-found/not-found.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
