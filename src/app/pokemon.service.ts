import { HttpClient } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { PokemonData, PokemonResponse} from './pokemon-data';
import { pokeData } from './poke-data.json'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonList: PokemonData[] = pokeData as PokemonData[];
  constructor(private readonly http: HttpClient, private readonly apollo: Apollo) {
/*     this.apollo
      .watchQuery({
        query: gql`
          query Pokemon_v2_pokemonsprites {
            pokemon_v2_pokemonsprites(
              where: { pokemon_id: { _gt: 0, _lt: 1000 } }
            ) {
              pokemon_v2_pokemon {
                name
                pokemon_v2_pokemontypes {
                  pokemon_v2_type {
                    name
                  }
                }
              }
              id
              pokemon_id
              sprites(path: "other.official-artwork.front_default")
            }
          }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.pokemonList = result.data;
        this.loaded = result.loading;
      });
 */  }


  getPokemons(){

    let randomNumber: number;
    let result: PokemonData[] = [];
    for(let i=0;i<=20;i++){
      randomNumber = Math.floor(Math.random()*1025) +1;
      result.push(this.pokemonList[randomNumber]);
    }
    return result;

  }

  fetchPokemon(pokeId: number) {
    let isLoading: boolean;
    let pokemon: PokemonResponse;
    return this.apollo.watchQuery<PokemonResponse>({
      query: gql`
        query Pokemon($id: Int) {
          pokemon_v2_pokemon(
            where: {
              id: { _eq: $id }
              pokemon_v2_pokemonsprites: { sprites: {} }
            }
          ) {
            name
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
            pokemon_v2_pokemonsprites(where: { id: { _eq: $id } }) {
              sprites(path: "other.official-artwork")
            }
          }
          pokemon_v2_region {
            name
          }
          pokemon_v2_ability {
            name
          }
          pokemon_v2_pokemonspecies {
            name
          }
        }
      `,
      variables: {
        id: pokeId,
      },
    })
    .valueChanges;
    ;
  }


}
