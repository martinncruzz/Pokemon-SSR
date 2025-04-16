import { Sprites, Cries } from '@pokemons/interfaces/poke-api.interfaces';

export interface Pokemon {
  id: number;
  name: string;
  sprites?: Sprites;
  cries?: Cries;
}
