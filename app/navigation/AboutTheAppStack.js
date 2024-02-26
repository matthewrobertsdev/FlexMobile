import React from 'react';
import { useColorScheme } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/AboutScreen'

import DrawerToggleButton from '../components/DrawerToggleButton';

const Stack = createStackNavigator();

export default function AboutContainerStack() {
  const isDarkMode = useColorScheme() === 'dark';

  let screenOptions = ({ navigation }) => ({
    headerShown: true,
    headerTintColor: 'white',
    headerStyle: { backgroundColor: isDarkMode ? 'rgb(207,0,30)' : 'rgb(207,0,30)' /*'rgb(255,59,48)'*/ },
    title: "About Learn Flex",
    headerTitleStyle: {
      color: 'white'
    },
    headerRight: () => <DrawerToggleButton navigation={navigation} />
  })

  return (
    <Stack.Navigator>
      <Stack.Screen name={"About Learn Flex"} component={AboutScreen}
        options={screenOptions} />
    </Stack.Navigator>
  )
}
