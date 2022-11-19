import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import FlexGapScreen from '../screens/FlexGapScreen'
import DrawerToggleButton from '../components/DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexGapStack() {

let screenOptions = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: 'white',
  headerStyle: {backgroundColor: 'rgb(0, 142, 0)'},
  title: "Flex Gap",
  headerTitleStyle: {
    color: 'white'
  },
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"Flex Gap"} component={FlexGapScreen}
        options={screenOptions}/>
    </Stack.Navigator>
  );
}
