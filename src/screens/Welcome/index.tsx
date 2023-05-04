import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Platform, Image, TouchableOpacity, StatusBar} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SCREENS_ROUTES} from '../../navigation/constants'

const Welcome = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate(SCREENS_ROUTES.LOGIN)
  }
  return (
    <ImageBackground
      source={require('../../assets/resources/welcome-background.jpeg')}
      style={styles.backgroundImage}
      blurRadius={10}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Image source={require('../../assets/resources/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? 100 : 140,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    height: 48,
    width: 168,
    backgroundColor: '#ED572F',
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
})

export default Welcome
