import React from 'react'
import { View, Text } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'

import { Wrapper } from '../../components/Wrapper'
import { PokemonResponse } from '../../services/pokemons'

import { styles } from './styles'

type RouteParams = {
  pokemon: PokemonResponse
}

export const PokemonDetails = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const { pokemon } = route.params as RouteParams

  return (
    <Wrapper>
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text>{pokemon.name}</Text>
      </View>
    </Wrapper>
  )
}
