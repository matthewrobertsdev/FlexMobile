//import react
import React from 'react';
import {useColorScheme} from 'react-native';

//import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

//import pages
import AboutScreen from './AboutScreen'

import DrawerToggleButton from './DrawerToggleButton';

const Stack = createStackNavigator();

export default function AboutContainerStack({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

let detailScreenOptionsAndroid1 = ({ navigation }) => ({
  headerShown: true,
  headerStyle: {backgroundColor: isDarkMode ? 'rgb(207,0,30)' : 'rgb(255,59,48)'},
  title: "About Learn Flex",
  headerTitleStyle: {
    color: 'white'
  },
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
let detailScreenOptionsiOS = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: isDarkMode ? 'rgb(207,0,30)' : 'rgb(255,59,48)'},
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
if (Platform.OS === 'android') {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"About Learn Flex"} component={AboutScreen}
        options={detailScreenOptionsAndroid1}/>
    </Stack.Navigator>
  );
} else {
  return (
  <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"About Learn Flex"} component={AboutScreen}
        options={detailScreenOptionsiOS}/>
    </Stack.Navigator>
  )
}
}
