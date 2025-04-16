import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

import { PaginationService } from '@shared/services/pagination.service';
import { PokemonListComponent } from '@pokemons/components/pokemon-list/pokemon-list.component';
import { PokemonSkeletonComponent } from '@pokemons/components/pokemon-skeleton/pokemon-skeleton.component';
import { PokemonsService } from '@pokemons/services/pokemons.service';

@Component({
  selector: 'pokemons-page',
  imports: [RouterLink, PokemonListComponent, PokemonSkeletonComponent],
  templateUrl: './pokemons-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPageComponent {
  title = inject(Title);
  meta = inject(Meta);

  paginationService = inject(PaginationService);
  pokemonsService = inject(PokemonsService);

  metaTagsEffect = effect(() => {
    this.title.setTitle(`Pokemons Page`);
    this.meta.updateTag({
      name: 'description',
      content: 'Explore all the pokemons in our website',
    });

    this.meta.updateTag({
      name: 'og:image',
      content: `https://res.cloudinary.com/dhhxe6sif/image/upload/v1743279154/SSR-Angular/cinptgg2jfaq9talgmkx.png`,
    });
  });

  pokemonsResource = rxResource({
    request: () => ({ page: this.paginationService.currentPage() - 1 }),
    loader: ({ request }) =>
      this.pokemonsService.getPokemons({ offset: request.page * 9 }),
  });
}
