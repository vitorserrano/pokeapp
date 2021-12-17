import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Pokemons } from '../screens/Pokemons'
import { PokemonDetails } from '../screens/PokemonDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Pokemons" component={Pokemons} />
    <Screen name="PokemonDetails" component={PokemonDetails} />
  </Navigator>
)
