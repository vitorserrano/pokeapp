import { api } from './api';

type PokemonsListResponse = {
  count?: number
  next?: string
  previous?: null
  results: [{
    name: string
    url: string
  }]
}

type Types = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type Pokemon = {
  abilities: [{
    ability: {
      name: string
      url: string
    },
    is_hidden: boolean
    slot: 1
  }]
  base_experience: number
  forms: [{
    name: string
    url: string
  }]
  game_indices: [{
    game_index: number
    version: {
      name: string
      url: string
    }
  }]
  height: number
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: [{
    move: {
      name: string
      url: string
    },
    version_group_details: [{
      level_learned_at: number
      move_learn_method: {
        name: string
        url: string
      },
      version_group: {
        name: string
        url: string
      }
    }]
  }]
  name: string
  order: number
  species: {
    name: string
    url: string
  }
  sprites: {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    other: {
      dream_world: {
        front_default: string
      }
      home: {
        front_default: string
        front_shiny: string
      }
      "official-artwork": {
        front_default: string
        front_shiny: string
      }
    }
  }
  types: Types[]
}

export type PokemonResponse = Pokemon & {
  thumbnail: string
}

export const getPokemons = async (offset: number = 0, limit: number = 20): Promise<PokemonResponse[]> => {
  const response = await fetch(api.concat(`/pokemon?offset=${offset}&limit=${limit}`))
  const { results }: PokemonsListResponse = await response.json()

  return Promise.all(results.map(async (pokemon) => {
    const pokemonDetails = await fetch(pokemon.url)
    const details: Pokemon = await pokemonDetails.json()

    return {
      ...details,
      thumbnail: details.sprites.other["official-artwork"].front_default as string,
    }
  }))
} 