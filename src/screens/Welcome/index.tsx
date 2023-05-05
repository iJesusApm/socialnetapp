import React from 'react'
import {View, Text, StyleSheet, Platform, Image} from 'react-native'
import Wrapper from './components/Wrapper'

const Welcome = () => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Image source={require('../../assets/resources/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome</Text>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 100 : 140,
  },
  title: {
    marginTop: 32,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 33,
    color: '#FDFDFD',
  },
  logo: {
    width: 310,
    height: 38,
    resizeMode: 'contain',
  },
})

export default Welcome
