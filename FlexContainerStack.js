//import react
import React from 'react';
import {useColorScheme} from 'react-native';

//import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

//import pages
import MainScreen from './MainScreen';
import ChangeFlexContainerScreen from './ChangeFlexContainerScreen'
import AboutFlexContainerScreen from './AboutFlexContainerScreen'


import DrawerToggleButton from './DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexContainerStack() {
  const isDarkMode = useColorScheme() === 'dark';
  let detailScreenOptionsiOS1 = ({ navigation }) => ({
    headerShown: true,
    headerTintColor: isDarkMode ? 'white' : 'white',
    headerStyle: {backgroundColor: isDarkMode ? 'blue' : 'blue'},
    title: 'Flex Container',
    headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsiOS2 = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: isDarkMode ? 'blue' : 'blue'},
  title: "Container Values",
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsiOS3 = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: isDarkMode ? 'blue' : 'blue'},
  title: "About Containers",
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsAndroid1 = ({ navigation }) => ({
  headerShown: false,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: isDarkMode ? 'blue' : 'blue'},
  title: "Flex Container",
  headerTitleStyle: {
    color: 'white'
  },
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})

let detailScreenOptionsAndroid2 = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
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
      <Stack.Screen name={"About Flex Containers"} component={AboutFlexContainerScreen}
      options={detailScreenOptionsiOS3}/>
    </Stack.Navigator>
  )
}
}
