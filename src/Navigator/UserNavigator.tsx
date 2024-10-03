import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserLogin, UserRegister } from '../index';
import { User, Share } from 'iconsax-react-native'; // Import specific icons

const UserNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;

          if (route.name === 'UserLogin') {
            IconComponent = User;
          } else if (route.name === 'UserRegister') {
            IconComponent = Share;
          }
          return IconComponent ? (focused?(
            <IconComponent size={size} color={color} variant='Bold' />
          ) : <IconComponent size={size} color={color} /> ): null ;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="UserLogin"
        component={UserLogin}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="UserRegister"
        component={UserRegister}
      />
    </Tab.Navigator>
  );
};

export default UserNavigator;
