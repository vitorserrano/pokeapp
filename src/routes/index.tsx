import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'

import { PokemonResponse } from '../services/pokemons'

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Pokemons: undefined
      PokemonDetails: { pokemon: PokemonResponse }
    }
  }
}

export const Routes = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
)
