/* importar react  */
import React from 'react';
/* importamos los componentes de react */
import {
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
/* importamos navigator stack */
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* importamos booton tabs */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* importamos HomeScreen */
import HomeScreen from './src/navigator/ScreensStack/HomeScreen';
/* importamos DetailsScreen */
import DetailsScreen from './src/navigator/ScreensStack/DetailsScreen';
/*importamos los iconos */
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
 
  return (
    /* {
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer> }*/
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen 
        name="Inicio" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};