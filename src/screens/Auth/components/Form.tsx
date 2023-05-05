import React, {useState} from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image} from 'react-native'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.visibilityBtn} onPress={() => setShowPassword(!showPassword)}>
          <Image source={require('../../../assets/resources/show-passwod-icon.png')} style={styles.passwordIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 4,
  },
  input: {
    marginTop: 12,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: 343,
    height: 40,
    backgroundColor: '#FDFDFD',
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 8,
  },
  button: {
    justifyContent: 'center',
    marginVertical: 12,
    width: 343,
    height: 40,
    backgroundColor: '#ED572F',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
  },
  visibilityBtn: {
    position: 'absolute',
    right: 12,
    top: 22,
  },
  passwordIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
})

export default Form
