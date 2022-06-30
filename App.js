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
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Settings" component={DetailsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};