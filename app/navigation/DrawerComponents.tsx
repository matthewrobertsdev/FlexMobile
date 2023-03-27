import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FlexContainerStack from './FlexContainerStack'
import FlexGapStack from './FlexGapStack'
import FlexOrderStack from './FlexOrderStack'
import FlexItemsStack from './FlexItemsStack'
import AboutTheAppStack from './AboutTheAppStack'
import AboutFlexStack from './AboutFlexStack'
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerIcon({size, name}) {
  return (
    <Ionicons name={name} size={size} color='white'/>
  )
}

function DrawerComponents() {
  const {height, width} = useWindowDimensions();

  const screenOptions = {
    headerShown: false,
    drawerActiveTintColor: 'white',
    drawerInactiveTintColor: 'white',
    drawerStyle: {
      backgroundColor: 'rgb(255, 71, 0)',
      width: (width < 500 || width > 1000) ? 225 : 300
    },
    drawerType: width > 1050 ? 'permanent' : 'front'
  };
  
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen name="About Flex Stack" component={AboutFlexStack}
        options={{title: 'About FlexBox', drawerIcon: ({size}) => (
          <DrawerIcon size={size} name='book-outline'/>
        ),}}/>
      <Drawer.Screen name="Container Stack" component={FlexContainerStack}
        options={{title: 'Flex Container', drawerIcon: ({size}) => (
          <DrawerIcon size={size} name='square'/>
        ),}}/>
        <Drawer.Screen name="Gap Stack" component={FlexGapStack}
        options={{title: 'Flex Gap', drawerIcon: ({size}) => (
          <DrawerIcon size={size} name='grid-outline'/>
        ),}}/>
        <Drawer.Screen name="Flex Items Stack" component={FlexItemsStack}
        options={{title: 'Flex Items', drawerIcon: ({size}) => (
          <DrawerIcon size={size} name='apps-outline'/>
        ),}}/>
        <Drawer.Screen name="Order Stack" component={FlexOrderStack}
        options={{title: 'Flex Order', drawerIcon: ({size}) => (
          <DrawerIcon size={size} name='ellipsis-horizontal-outline'/>
        ),}}/>
      <Drawer.Screen name="About Stack" component={AboutTheAppStack}
        options={{title: 'About the App', drawerIcon: ({size}) => (
          <DrawerIcon size={size} name='help-outline'/>
        ),}}/>
      </Drawer.Navigator>
    )
}

export default DrawerComponents