//import react
import React from 'react';
import {useColorScheme} from 'react-native';

//import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

//import pages
import FlexItemsScreen from './FlexItemsScreen'

import DrawerToggleButton from './DrawerToggleButton';
import ChangeFlexItemsScreen from './ChangeFlexItemsScreen';

const Stack = createStackNavigator();

export default function FlexItemsStack() {
  const isDarkMode = useColorScheme() === 'dark';

let detailScreenOptionsAndroid1 = ({ navigation }) => ({
  headerShown: true,
  headerStyle: {backgroundColor: 'rgb(93, 0, 255)'},
  title: "Flex Order",
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
let detailScreenOptionsiOS1 = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: 'rgb(93, 0, 255)'},
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsiOS2 = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: 'rgb(93, 0, 255)'},
  title: "Item Values",
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsAndroid2 = ({ navigation }) => ({
  headerShown: true,
  headerStyle: {backgroundColor: 'rgb(93, 0, 255)'},
  title: "Item Values",
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
if (Platform.OS === 'android') {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"Flex Items"} component={FlexItemsScreen}
        options={detailScreenOptionsAndroid1}/>
         <Stack.Screen name={"Flex Item Values"} component={ChangeFlexItemsScreen}
        options={detailScreenOptionsAndroid2}/>
    </Stack.Navigator>
  );
} else {
  return (
  <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"Flex Items"} component={FlexItemsScreen}
        options={detailScreenOptionsiOS1}/>
        <Stack.Screen name={"Flex Items\' Values"} component={ChangeFlexItemsScreen}
        options={detailScreenOptionsiOS2}/>
    </Stack.Navigator>
  )
}
}
