import { Routes } from '@angular/router';

export const pokemonsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pokemons/pages/pokemons-page/pokemons-page.component'),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('@pokemons/pages/pokemon-page/pokemon-page.component'),
  },
];

export default pokemonsRoutes;
