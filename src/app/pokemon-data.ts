export interface PokemonData {
  pokemon_v2_pokemon: {
    name: string;
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: {
        name: string;
      };
    }[];
  };
  id: number;
  pokemon_id: number;
  sprites: string;
}



