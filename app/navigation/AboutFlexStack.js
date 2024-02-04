import React from 'react';
import { Platform, useColorScheme } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import AboutFlexScreen from '../screens/AboutFlexScreen'

import DrawerToggleButton from '../components/DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexGapStack() {
  const isDarkMode = useColorScheme() === 'dark';

  const iosScreenOptions = ({ navigation }) => ({
    headerShown: true,
    headerTintColor: isDarkMode ? 'white' : 'white',
    headerStyle: { backgroundColor: 'rgb(232, 111, 23)' },
    title: "About Flexbox",
    headerTitleStyle: {
      color: 'white'
    },
    headerRight: () => <DrawerToggleButton navigation={navigation} />
  })

  const androidScreenOptions = ({ navigation }) => ({
    headerShown: false,
    headerTintColor: 'white',
    headerStyle: { backgroundColor: 'rgb(232, 111, 23)' },
    title: "About Flexbox",
    headerTitleStyle: {
      color: 'white'
    },
    headerRight: () => <DrawerToggleButton navigation={navigation} />
  })
  if (Platform.OS === 'ios') {
    return (
      <Stack.Navigator>
        <Stack.Screen name={"About Flexbox"} component={AboutFlexScreen}
          options={iosScreenOptions} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator>
        <Stack.Screen name={"About Flexbox"} component={AboutFlexScreen}
          options={androidScreenOptions} />
      </Stack.Navigator>
    );
  }
}
