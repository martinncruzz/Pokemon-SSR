import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { Pokemon } from '@pokemons/interfaces/pokemon.interface';
import { PokemonMapper } from '@pokemons/mappers/pokemon.mapper';
import {
  PokeAPIDetailResponse,
  PokeAPIListResponse,
} from '@pokemons/interfaces/poke-api.interfaces';

interface Pagination {
  limit?: number;
  offset?: number;
}

const BASE_URL = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class PokemonsService {
  private http = inject(HttpClient);

  getPokemons(pagination: Pagination): Observable<Pokemon[]> {
    const { limit = 20, offset = 0 } = pagination;

    return this.http
      .get<PokeAPIListResponse>(`${BASE_URL}`, { params: { offset, limit } })
      .pipe(map(({ results }) => results.map(PokemonMapper.fromListItem)));
  }

  getPokemonById(id: string): Observable<Pokemon> {
    return this.http
      .get<PokeAPIDetailResponse>(`${BASE_URL}/${id}`)
      .pipe(map(PokemonMapper.fromDetailResponse));
  }
}
