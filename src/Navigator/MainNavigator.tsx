import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HoaNavigator from './HoaNavigator';
import {PageContent} from '../index'
import UserNavigator from './UserNavigator';

const MainNavigator = () => {
  
  const Drawer = createDrawerNavigator()

  
  return (
    <Drawer.Navigator > 
      <Drawer.Screen name ='HoaNavigator' component={HoaNavigator}/>
      <Drawer.Screen name='ContentNavigator' component={PageContent}/>
      <Drawer.Screen name='UserNavigator' component={UserNavigator}/>
    </Drawer.Navigator>
  )
}

export default MainNavigator    