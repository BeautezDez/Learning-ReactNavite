import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HoaNavigator from './src/Navigator/HoaNavigator'
import MainNavigator from './src/Navigator/MainNavigator'

const App = () => {
  return (
    <>
    <StatusBar barStyle={'dark-content'} backgroundColor='transparent' translucent />
    <NavigationContainer>
    <MainNavigator/>
    </NavigationContainer>
    </>
  )
}

export default App