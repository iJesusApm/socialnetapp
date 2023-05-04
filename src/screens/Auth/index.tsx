import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Auth = () => {
  return (
    <View style={styles.container}>
      <Text>Auth Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
})

export default Auth
