import React from 'react'
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native'

type Props = {
  logo: string
}

const AuthButton = ({logo}: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </TouchableOpacity>
  )
}

const AppleAuthButton = () => {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Image
        source={require('../../../assets/resources/apple-logo.png')}
        style={styles.appleLogo}
        resizeMode="contain"
      />
      <Text style={styles.appleText}>Apple ID</Text>
    </TouchableOpacity>
  )
}

const SocialMedia = () => {
  const buttons = [
    {logo: require('../../../assets/resources/facebook-logo.png')},
    {logo: require('../../../assets/resources/twitter-logo.png')},
    {logo: require('../../../assets/resources/reddit-logo.png')},
    {logo: require('../../../assets/resources/google-logo.png')},
  ]

  return (
    <>
      <View style={styles.container}>
        {buttons.map(button => (
          <AuthButton key={button.logo} logo={button.logo} />
        ))}
      </View>
      <AppleAuthButton />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 8,
    backgroundColor: '#FDFDFD',
    height: 40,
  },
  logo: {
    width: 24,
    height: 24,
  },
  appleButton: {
    marginTop: 12,
    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 8,
    backgroundColor: '#FDFDFD',
    height: 40,
  },
  appleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  appleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
  },
})

export default SocialMedia
