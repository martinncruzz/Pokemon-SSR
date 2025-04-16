import { Pokemon } from '@pokemons/interfaces/pokemon.interface';
import {
  PokeAPIDetailResponse,
  PokeAPIListItem,
} from '@pokemons/interfaces/poke-api.interfaces';

export class PokemonMapper {
  static fromListItem(item: PokeAPIListItem): Pokemon {
    return {
      id: Number(item.url.split('/').at(-2)),
      name: item.name,
    };
  }

  static fromDetailResponse(detail: PokeAPIDetailResponse): Pokemon {
    return {
      id: detail.id,
      name: detail.name,
      sprites: detail.sprites,
      cries: detail.cries,
    };
  }
}
