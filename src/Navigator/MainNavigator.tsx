import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HoaNavigator from './HoaNavigator';


const MainNavigator = () => {
  
  const Drawer = createDrawerNavigator()

  
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}> 
      <Drawer.Screen name ='HoaNavigator' component={HoaNavigator}/>
    </Drawer.Navigator>

  )
}

export default MainNavigator    