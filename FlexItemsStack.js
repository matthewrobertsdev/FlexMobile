import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FlexItemsScreen from './FlexItemsScreen'
import DrawerToggleButton from './DrawerToggleButton';
import ChangeFlexItemsScreen from './ChangeFlexItemsScreen';
import ItemValueScreen from './ItemValueScreen';

const Stack = createStackNavigator();

export default function FlexItemsStack() {

  function screenOptions(title) {
    return ({ navigation }) => ({
      headerShown: true,
      headerTintColor: 'white',
      headerStyle: {backgroundColor: 'rgb(93, 0, 255)'},
      title: title,
      headerTitleStyle: {
        color: 'white'
      },
      headerRight: () => <DrawerToggleButton navigation={navigation}/>
    })
  }

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"Flex Items"} component={FlexItemsScreen}
        options={screenOptions("Flex Items")}/>
        <Stack.Screen name={"Flex Items\' Values"} component={ChangeFlexItemsScreen}
        options={screenOptions("Item Values")}/>
        <Stack.Screen name={"Change Item Value"} component={ItemValueScreen}
        options={screenOptions("Item Value")}/>
    </Stack.Navigator>
  )
}
