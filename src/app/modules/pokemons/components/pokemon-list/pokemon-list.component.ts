import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Pokemon } from '@pokemons/interfaces/pokemon.interface';
import { PokemonCardComponent } from '@pokemons/components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'pokemon-list',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  pokemons = input.required<Pokemon[]>();
}
