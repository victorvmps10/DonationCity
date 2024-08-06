import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import InAppRoutes from './InAppRoutes';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SingUp';
const Stack = createStackNavigator();

export default function Routes(){
  return(
    
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="InApp"
        component={InAppRoutes}
      />
  
    </Stack.Navigator>

  )
}