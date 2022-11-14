import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import FlexContainerScreen from './FlexContainerScreen';
import ChangeFlexContainerScreen from './ChangeFlexContainerScreen'
import AboutFlexContainerScreen from './AboutFlexContainerScreen'
import ContainerValueScreen from './ContainerValueScreen'
import DrawerToggleButton from './DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexContainerStack() {

  function getScreenOptionsWithTitle(title) {
    return ({ navigation }) => ({
      headerShown: true,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'blue' },
      title: title,
      headerRight: () => <DrawerToggleButton navigation={navigation} />
    })
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Flex Container'}
        component={FlexContainerScreen}
        options={getScreenOptionsWithTitle('Flex Container')}
      />
      <Stack.Screen name={"Flex Container Values"} component={ChangeFlexContainerScreen}
        options={getScreenOptionsWithTitle('Container Values')} />
      <Stack.Screen name={"About Flex Containers"} component={AboutFlexContainerScreen}
        options={getScreenOptionsWithTitle('ABout Container')} />
      <Stack.Screen name={"Change Container Value"} component={ContainerValueScreen}
        options={getScreenOptionsWithTitle('Container Value')} />
    </Stack.Navigator>
  );
}
