import React from 'react';
import {Home} from './Home.js';
import {Info} from './Info.js';
import {Description} from './Description.js';
import {Pictures} from './Pictures.js';
import {Form} from './Form.js';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let name;
          if (route.name === 'Home'){
            name = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Info'){
            name = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Description'){
            name = focused ? 'paw' : 'paw-outline';
          } else if (route.name === 'Pictures'){
            name = focused ? 'image' : 'image-outline';
          } else if (route.name === 'Form'){
            name = focused ? 'document' : 'document-outline';
          }
          return <Ionicons name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#de985e',
        inactiveTintColor: 'gray',
      }}
      initialRouteName={'Home'}
    >
      <Tab.Screen name="Pictures" component={Pictures} />
      <Tab.Screen name="Description" component={Description} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Form" component={Form} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
