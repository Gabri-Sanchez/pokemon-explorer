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

export interface PokemonResponse {
  pokemon_v2_pokemon: Pokemon[];
  pokemon_v2_region: Region[];
  pokemon_v2_ability: Ability[];
}

interface Pokemon {
  name: string;
  pokemon_v2_pokemontypes: PokemonType[];
  pokemon_v2_pokemonsprites: PokemonSprite[];
}

interface PokemonType {
  pokemon_v2_type: {
    name: string;
  };
}

interface PokemonSprite {
  sprites: {
    front_shiny: string;
    front_default: string;
  };
}

interface Region {
  name: string;
}

interface Ability {
  name: string;
}
