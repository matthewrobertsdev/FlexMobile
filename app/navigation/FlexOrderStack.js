//import react
import React from 'react';
import {useColorScheme} from 'react-native';

//import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

//import pages
import FlexOrderScreen from '../screens/FlexOrderScreen'

import DrawerToggleButton from '../components/DrawerToggleButton';

const Stack = createStackNavigator();

export default function FlexGapStack() {
  const isDarkMode = useColorScheme() === 'dark';

let screenOptions = ({ navigation }) => ({
  headerShown: true,
  headerTintColor: isDarkMode ? 'white' : 'white',
  headerStyle: {backgroundColor: 'rgb(59, 59, 147)'},
  title: "Flex Order",
  headerTitleStyle: {
    color: 'white'
  },
  headerRight: () => <DrawerToggleButton navigation={navigation}/>
})
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Flex Order"} component={FlexOrderScreen}
        options={screenOptions}/>
    </Stack.Navigator>
  );
}
