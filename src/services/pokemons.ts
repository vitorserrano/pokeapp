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

export type PokemonsResponse = {
  order: number
  name: string
  types: Types[]
  thumbnail: string
}

export const getPokemons = async (offset: number, limit: number): Promise<PokemonsResponse[]> => {
  const response = await fetch(api.concat(`/pokemon?offset=${offset}&limit=${limit}`))
  const { results }: PokemonsListResponse = await response.json()

  return Promise.all(results.map(async (pokemon) => {
    const pokemonDetails = await fetch(pokemon.url)
    const { order, name, types, sprites }: any = await pokemonDetails.json()

    return {
      order: order as number,
      name: name as string,
      types: types as Types[],
      thumbnail: sprites.other["official-artwork"].front_default as string,
    }
  }))
} 