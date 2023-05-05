import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Wrapper from './components/Wrapper'
import Form from './components/Form'

const Auth = () => {
  return (
    <Wrapper>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>SIGN IN WITH YOUR EMAIL ADDRESS</Text>
      <Form />
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
