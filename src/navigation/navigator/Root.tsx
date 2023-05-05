import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'

import WelcomeScreen from '../../screens/Welcome'
import AuthScreen from '../../screens/Auth'

import {SCREENS_ROUTES} from '../constants'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS_ROUTES.LOGIN}
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name={SCREENS_ROUTES.WELCOME} component={WelcomeScreen} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS_ROUTES.LOGIN} component={AuthScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
