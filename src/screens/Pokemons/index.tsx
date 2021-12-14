import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, Image, FlatList } from 'react-native'

import { getPokemons, PokemonsResponse } from '../../services/pokemons'
import styles from './styles'

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonsResponse[]>([])
  const [offset, setOffset] = useState(0)

  const loadPokemons = async () => {
    try {
      const limit = 20
      const response = await getPokemons(offset, limit)

      setPokemons(oldValue => [...oldValue, ...response])
      setOffset(oldValue => oldValue + limit)
    } catch (error) {
      console.log(error)
    }
  }

  const keyExtractor = useCallback(
    (item: PokemonsResponse) => String(item.order),
    []
  )

  const renderItem = useCallback(
    ({ item }: { item: PokemonsResponse }) => (
      <View key={item.order}>
        <Text>{item.name}</Text>
        <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
      </View>
    ),
    []
  )

  useEffect(() => {
    loadPokemons()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.1}
        numColumns={2}
      />
    </View>
  )
}
