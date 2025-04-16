import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { PokemonsService } from '@pokemons/services/pokemons.service';

@Component({
  selector: 'pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPageComponent {
  title = inject(Title);
  meta = inject(Meta);

  pokemonId = inject(ActivatedRoute).snapshot.params['id'];

  pokemonsService = inject(PokemonsService);

  metaTagsEffect = effect(() => {
    if (this.pokemonResource.hasValue()) {
      const pokemon = this.pokemonResource.value();

      const pageTitle = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name
        .slice(1)
        .toLowerCase()} Page`;
      const pageDescription = `Page about ${pokemon.name
        .charAt(0)
        .toUpperCase()}${pokemon.name.slice(1).toLowerCase()}`;

      this.title.setTitle(pageTitle);
      this.meta.updateTag({
        name: 'description',
        content: pageDescription,
      });

      this.meta.updateTag({
        name: 'og:image',
        content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
      });
      this.meta.updateTag({ name: 'og:title', content: pageTitle });
      this.meta.updateTag({
        name: 'og:description',
        content: pageDescription,
      });
    }
  });

  pokemonResource = rxResource({
    request: () => ({ id: this.pokemonId }),
    loader: ({ request }) => this.pokemonsService.getPokemonById(request.id),
  });
}
