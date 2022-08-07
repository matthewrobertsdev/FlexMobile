import React, {useState} from 'react'
import { useColorScheme, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen'
import ChangeFlexPropertiesScreen from './ChangeFlexPropertiesScreen'
import AndroidLoadingScreen from './AndroidLoadingScreen'
import FlexContainerStack from './FlexContainerStack'
import AboutContainerStack from './AboutContainerStack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const mainScreenOptions = ({ navigation }) => ({
  headerShwon: false,
  headerStyle: {backgroundColor: 'rgb(255,59,48)'},
  title: '',
})

const loadingScreenOptions = ({navigation}) => ({
  headerShown: false,
})

const Drawer = createDrawerNavigator();

const RootStack = createNativeStackNavigator();

function DrawerContent(props) {
  const isDarkMode = useColorScheme() === 'dark';
  const defaultColor=isDarkMode ? 'white' : 'black'
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Flex Container"
        onPress={() => {props.navigation.navigate("Container Stack")}}
        activeTintColor={defaultColor}
        inactiveTintColor={defaultColor}
      />
      <DrawerItem
        label="About Learn Flex"
        onPress={() => {props.navigation.navigate("About Stack")}}
        activeTintColor={defaultColor}
        inactiveTintColor={defaultColor}
      />
    </DrawerContentScrollView>
  );
}

export const SettingsContext = React.createContext();

function RootStackScreen() {
  const [settings, setSettings]=useState({justifyContent: 'flex-start', alignContent: 'flex-start', 
  flexDirection: 'row', alignItems: 'flex-start'})
  const isDarkMode = useColorScheme() === 'dark';

  const highlightColor = 'white'

  
  if (Platform.OS === 'android') {
    const headerOptions = {
      headerShown: false,
      drawerActiveTintColor: highlightColor,
    };
    return (
      <SettingsContext.Provider value={[settings, setSettings]}>
      <Drawer.Navigator screenOptions={headerOptions}>
          {/*returnMainRootStackGroup()*/}
          <Drawer.Screen name="Container Stack" component={FlexContainerStack}
          options={{title: 'Flex Container Properties'}}/>
          <Drawer.Screen name="About Stack" component={AboutContainerStack}
          options={{title: 'About Learn Flex'}}/>
      </Drawer.Navigator>
      </SettingsContext.Provider>
    );
  } else {
    const headerOptions = {
      headerShown: false,
      drawerActiveTintColor: highlightColor,
      drawerInactiveTintColor: 'white',
      drawerStyle: {
        backgroundColor: 'rgb(128,72,44)',
      },
    };
    return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      <Drawer.Navigator screenOptions={headerOptions}>
          {/*returnMainRootStackGroup()*/}
          <Drawer.Screen name="Container Stack" component={FlexContainerStack}
          options={{title: 'Flex Container', drawerIcon: ({size}) => (
            <Ionicons name="square" size={size} color='white' />
          ),}}/>
          <Drawer.Screen name="About Stack" component={AboutContainerStack}
          options={{title: 'About Learn Flex', drawerIcon: ({size}) => (
            <Ionicons name="question.outline" size={size} color='white'/>
          ),}}/>
      </Drawer.Navigator>
      </SettingsContext.Provider>
    )
  }
  }
  
/*
function returnMainRootStackGroup() {
  if (Platform.OS === 'ios') {
    return (
    <RootStack.Group>
      <RootStack.Screen name="Clock" component={ClockScreen} options={{
        headerShown: false,
      }} />
    </RootStack.Group>
    )
  } else {
    return (
    <RootStack.Group>
      <RootStack.Screen name="LoadingScreen" component={AndroidLoadingScreen} options={{
        headerShown: false,
      }} />
      <RootStack.Screen name="Clock" component={ClockScreen} options={{
        headerShown: false,
      }} />
    </RootStack.Group>
    )
  }
}
*/
export default RootStackScreen