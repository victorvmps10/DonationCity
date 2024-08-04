import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Account from "../pages/Account";
import Discover from "../pages/Discover";
import Feather from "react-native-vector-icons/dist/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Info from "../pages/Info";
const BottomTab = createBottomTabNavigator();

export default function InAppRoutes(){
    return(
        <BottomTab.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            tabBarStyle:{
                backgroundColor: '#FFF',
                borderTopColor: 'transparent',
                  
              },
              tabBarActiveTintColor: '#000',
              tabStyle:{
                paddingBottom: 5,
                paddingTop: 5,
              }
        }}
        >
            <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => {
                  return <Feather name="home" size={size} color={color}/>
                }
              }}
            />
            <BottomTab.Screen
            name="Descobrir"
            component={Discover}
            options={{
                tabBarIcon: ({size, color}) => {
                  return <Feather name="search" size={size} color={color}/>
                }
              }}
            />
            
            <BottomTab.Screen
            name="Conta"
            component={Account}
            options={{
                tabBarIcon: ({size, color}) => {
                  return <MaterialCommunityIcons name="account" size={size} color={color}/>
                }
              }}
            />
            <BottomTab.Screen
            name="Projeto"
            component={Info}
            options={{
                tabBarIcon: ({size, color}) => {
                  return <Feather name="info" size={size} color={color}/>
                }
              }}
            />
        </BottomTab.Navigator>
    )
}