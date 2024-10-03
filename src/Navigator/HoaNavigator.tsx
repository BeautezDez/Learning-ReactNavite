import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PageCtHoa, PageHoa, PageLoaiHoa} from '../index';

export type RootStackParamList = {
  PageLoaiHoa: undefined;
  PageHoa: {tenloai: string};
  PageCtHoa: {hoa: any};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HoaNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="PageLoaiHoa"
        component={PageLoaiHoa}
        options={{title: 'Loai hoa'}}
      />
      <Stack.Screen
        name="PageHoa"
        component={PageHoa}
        options={{title: 'Hoa'}}
      />
      <Stack.Screen
        name="PageCtHoa"
        component={PageCtHoa}
        options={{title: 'Chi tiet hoa'}}
      />
    </Stack.Navigator>
  );
};

export default HoaNavigator;
