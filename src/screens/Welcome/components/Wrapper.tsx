import React from 'react'
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {SCREENS_ROUTES} from '../../../navigation/constants'

type Props = {
  children: React.ReactNode
}

const Wrapper = ({children}: Props) => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate(SCREENS_ROUTES.LOGIN)
  }

  return (
    <ImageBackground
      source={require('../../../assets/resources/welcome-background.jpeg')}
      style={styles.backgroundImage}
      blurRadius={10}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.overlay} />
      {children}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
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

export default Wrapper
