import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import PlanetHeader from '../components/text/PlanetHeader'
import { colors } from '../theme/colors'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
          container: {
                    backgroundColor: colors.black, 
                    flex:1
          }
})
