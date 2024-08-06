import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SingUp';

const Stack = createStackNavigator();

export default function InLoginRoutes(){
  return(
    
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      
    </Stack.Navigator>

  )
}