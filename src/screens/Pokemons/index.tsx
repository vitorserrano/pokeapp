import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { getPokemons, PokemonResponse } from '../../services/pokemons'
import { getFullOrderNumber, getColorByType } from '../../utils'

import styles from './styles'

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState<PokemonResponse[]>([])
  const [offset, setOffset] = useState(0)

  const navigation = useNavigation()

  const loadPokemons = async () => {
    try {
      const response = await getPokemons()
      setPokemons(response)
    } catch (error) {
      console.error('Failed to load pokemons', error)
    }
  }

  const loadMorePokemons = async () => {
    try {
      const limit = 20
      const response = await getPokemons(offset, limit)

      setPokemons(oldValue => [...oldValue, ...response])
      setOffset(oldValue => oldValue + limit)
    } catch (error) {
      console.error('Failed to load more pokemons', error)
    }
  }

  useEffect(() => {
    loadPokemons()
  }, [])

  const navigateToPokemonDetails = (pokemon: PokemonResponse) =>
    navigation.navigate('PokemonDetails', { pokemon })

  const keyExtractor = useCallback(
    (item: PokemonResponse) => String(item.order),
    []
  )

  const renderItem = useCallback(
    ({ item }: { item: PokemonResponse }) => (
      <TouchableOpacity
        key={item.order}
        style={{
          ...styles.card,
          backgroundColor: getColorByType(item.types[0].type.name),
        }}
        activeOpacity={0.8}
        onPress={() => navigateToPokemonDetails(item)}
      >
        <View>
          <Text style={styles.order}>{getFullOrderNumber(item.id)}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Image style={styles.thumbnail} source={{ uri: item.thumbnail }} />
      </TouchableOpacity>
    ),
    [navigateToPokemonDetails]
  )

  const renderFooter = useCallback(
    () => (
      <View style={styles.loading}>
        <ActivityIndicator color="black" size="large" />
      </View>
    ),
    []
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pokeapp</Text>
      </View>

      <FlatList
        data={pokemons}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListFooterComponent={renderFooter}
        onEndReached={loadMorePokemons}
        onEndReachedThreshold={0.1}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}
