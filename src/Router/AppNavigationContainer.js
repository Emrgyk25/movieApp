import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Screen from '../Screens/Screen.js';
import view from '../Screens/view';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Screen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Screen"
        component={Screen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="view"
        component={view}
      />
    </Stack.Navigator>
  );
};

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigationContainer = () => {
  return <AppTabs />;
};

export default AppNavigationContainer;
