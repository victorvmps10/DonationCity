import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import InAppRoutes from './InAppRoutes';

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
        name="InApp"
        component={InAppRoutes}
      />
    </Stack.Navigator>

  )
}