import React from 'react';
import { useColorScheme } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import AboutFlexScreen from './AboutFlexScreen'

import DrawerToggleButton from './DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexGapStack() {
  const isDarkMode = useColorScheme() === 'dark';

  const screenOptions = ({ navigation }) => ({
    headerShown: true,
    headerTintColor: isDarkMode ? 'white' : 'white',
    headerStyle: { backgroundColor: 'rgb(230, 136, 0)' },
    title: "About Flex",
    headerTitleStyle: {
      color: 'white'
    },
    headerRight: () => <DrawerToggleButton navigation={navigation} />
  })
  return (
    <Stack.Navigator>
      <Stack.Screen name={"About Flexbox"} component={AboutFlexScreen}
        options={screenOptions} />
    </Stack.Navigator>
  );
}
