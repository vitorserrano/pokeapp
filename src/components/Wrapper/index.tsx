import React, { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'

type WrapperProps = {
  children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => (
  <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
)
