import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Wrapper from './components/Wrapper'
import Form from './components/Form'
import SocialMedia from './components/SocialMedia'

const Auth = () => {
  return (
    <Wrapper>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>SIGN IN WITH YOUR EMAIL ADDRESS</Text>
      <Form />
      <Text style={styles.subtitle}>CONTINUE WITH A SOCIAL ACCOUNT</Text>
      <SocialMedia />
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23,
    color: '#232323',
    paddingLeft: 8,
    paddingTop: 30,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    color: '#555555',
    paddingLeft: 8,
    paddingTop: 26,
  },
})

export default Auth
