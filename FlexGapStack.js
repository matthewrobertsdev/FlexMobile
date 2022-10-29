//import react
import React from 'react';
import {useColorScheme} from 'react-native';

//import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

//import pages
import FlexGapScreen from './FlexGapScreen'

import DrawerToggleButton from './DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexGapStack({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

let detailScreenOptionsAndroid1 = ({ navigation }) => ({
  headerShown: true,
  headerStyle: {backgroundColor: 'rgb(0, 142, 0)'},
  title: "Flex Gap",
  headerTitleStyle: {
    color: 'white'
  },
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
let detailScreenOptionsiOS = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: 'rgb(0, 142, 0)'},
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
if (Platform.OS === 'android') {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"Flex Gap"} component={FlexGapScreen}
        options={detailScreenOptionsAndroid1}/>
    </Stack.Navigator>
  );
} else {
  return (
  <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name={"Flex Gap"} component={FlexGapScreen}
        options={detailScreenOptionsiOS}/>
    </Stack.Navigator>
  )
}
}
