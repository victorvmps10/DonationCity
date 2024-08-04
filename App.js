import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BackHandler } from 'react-native';

import Routes from './src/routes/routes';

export default function App(){
  useEffect(() => {
    BackHandler.addEventListener('backPress', () => true)
    return () => BackHandler.removeEventListener('backPress', () => true)
  }, []);
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}