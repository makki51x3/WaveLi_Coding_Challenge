/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


import { MaterialIcons } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabThree"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={NotFoundScreen}
        options={{
          headerShown: false,
          title:'',
          tabBarIcon: ({ color,focused }) => <MaterialIcons name="explore" size={focused?34:24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={NotFoundScreen}
        options={{
          headerShown: false,
          title:'',
          tabBarIcon: ({ color,focused }) => <MaterialIcons name="search" size={focused?34:24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={HomeScreen}
        options={{
          headerShown: false,
          title:'',
          tabBarIcon: ({ color,focused }) => <MaterialIcons name="library-add" size={focused?34:24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={NotFoundScreen}
        options={{
          headerShown: false,
          title:'',
          tabBarIcon: ({ color,focused }) => <MaterialIcons name="message" size={focused?34:24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={NotFoundScreen}
        options={{
          headerShown: false,
          title:'',
          tabBarIcon: ({ color,focused }) => <MaterialIcons name="person" size={focused?34:24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
