//import react
import React from 'react';
import {useColorScheme} from 'react-native';

//import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

//import pages
import MainScreen from './MainScreen';
import ChangeFlexContainerScreen from './ChangeFlexContainerScreen'

import DrawerToggleButton from './DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexContainerStack() {
  const isDarkMode = useColorScheme() === 'dark';
  let detailScreenOptionsiOS1 = ({ navigation }) => ({
    headerShown: true,
    headerTintColor: isDarkMode ? 'white' : 'white',
    headerStyle: {backgroundColor: isDarkMode ? 'blue' : 'blue'},
    headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsiOS2 = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: isDarkMode ? 'blue' : 'blue'},
  title: "Container Values",
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsAndroid1 = ({ navigation }) => ({
  headerShown: false,
  headerStyle: {backgroundColor: isDarkMode ? 'blue' : 'blue'},
  title: "",
  headerTitleStyle: {
    color: 'white'
  },
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsAndroid2 = ({ navigation }) => ({
  headerShown: true,
  headerStyle: {backgroundColor: isDarkMode ? 'blue' : 'blue'},
  title: "Container Values",
  headerTitleStyle: {
    color: 'white'
  },
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
if (Platform.OS === 'android') {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name={'Flex Container'}
        component={MainScreen}
        options={detailScreenOptionsAndroid1}
      />
      <Stack.Screen name={"Flex Container Values"} component={ChangeFlexContainerScreen}
          options={detailScreenOptionsAndroid2}/>
    </Stack.Navigator>
  );
} else {
  return (
  <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name={'Flex Container'}
        component={MainScreen}
        options={detailScreenOptionsiOS1}
      />
      <Stack.Screen name={"Flex Container Values"} component={ChangeFlexContainerScreen}
      options={detailScreenOptionsiOS2}/>
    </Stack.Navigator>
  )
}
}
