//import react
import React from 'react';
import {useColorScheme} from 'react-native';

//import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

//import pages
import FlexItemsScreem from './FlexItemsScreen'

import DrawerToggleButton from './DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexItemsStack() {
  const isDarkMode = useColorScheme() === 'dark';

let detailScreenOptionsAndroid1 = ({ navigation }) => ({
  headerShown: true,
  headerStyle: {backgroundColor: 'rgb(84, 0, 255)'},
  title: "Flex Order",
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
let detailScreenOptionsiOS = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: 'rgb(84, 0, 255)'},
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
if (Platform.OS === 'android') {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"Flex Items"} component={FlexItemsScreem}
        options={detailScreenOptionsAndroid1}/>
    </Stack.Navigator>
  );
} else {
  return (
  <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"Flex Items"} component={FlexItemsScreem}
        options={detailScreenOptionsiOS}/>
    </Stack.Navigator>
  )
}
}
