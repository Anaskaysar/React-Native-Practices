import { View,StyleSheet } from 'react-native'
import React from 'react'
import Text from './text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'

export default function PlanetHeader() {
  return (
    <View style={styles.container}>
      <Text preset='h1' style={styles.container}>THE PLANETS</Text>
    </View>
  )
}

const styles =StyleSheet.create({
          container: {
             padding: spacing[4],  
             borderBottomWidth:0.3,
             borderBottomColor:colors.white
          }
})