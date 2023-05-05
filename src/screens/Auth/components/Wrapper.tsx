import React from 'react'
import {Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Image} from 'react-native'

type Props = {
  children: React.ReactNode
}

const Wrapper = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#F5F5F5" />
      <Image source={require('../../../assets/resources/logo-orange.png')} style={styles.logo} />
      {children}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 16,
  },
  logo: {
    width: 160,
    height: 20,
    resizeMode: 'contain',
    paddingTop: 60,
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 45,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ED572F',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
  },
})

export default Wrapper
