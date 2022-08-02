import React, {useState} from 'react'
import { useColorScheme, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen'
import ChangeFlexPropertiesScreen from './ChangeFlexPropertiesScreen'
import AndroidLoadingScreen from './AndroidLoadingScreen'
import AboutScreen from './AboutScreen'

const mainScreenOptions = ({ navigation }) => ({
  headerShwon: false,
  headerStyle: {backgroundColor: 'rgb(255,59,48)'},
  title: '',
})

const loadingScreenOptions = ({navigation}) => ({
  headerShown: false,
})

const RootStack = createNativeStackNavigator();

export const SettingsContext = React.createContext();

function RootStackScreen() {
  const [settings, setSettings]=useState({justifyContent: 'flex-start', alignContent: 'flex-start', 
  flexDirection: 'row', alignItems: 'flex-start'})
  const isDarkMode = useColorScheme() === 'dark';
  let detailScreenOptionsiOS = ({ navigation }) => ({
      headerShown: true,
      headerTransparent: true,
      headerBlurEffect: 'regular',
      headerTintColor: 'rgb(255,59,48)',
      headerStyle: {color: isDarkMode ? 'white' : 'black'},
  })
  let detailScreenOptionsAndroid = ({ navigation }) => ({
      headerShown: false,
      headerStyle: {backgroundColor: 'rgb(255,59,48)'},
      title: ''
  })
  
  if (Platform.OS === 'android') {
    return (
      <SettingsContext.Provider value={[settings, setSettings]}>
      <RootStack.Navigator>
          {/*returnMainRootStackGroup()*/}
          <RootStack.Screen name="Learn Flex" component={MainScreen}
          options={mainScreenOptions} 
          />
          <RootStack.Screen name="Flex Values" component={ChangeFlexPropertiesScreen}
          options={detailScreenOptionsAndroid}/>
          <RootStack.Screen name="About Learn Flex" component={AboutScreen}
           options={detailScreenOptionsAndroid}/>
      </RootStack.Navigator>
      </SettingsContext.Provider>
    );
  } else {
    <SettingsContext.Provider value={[settings, setSettings]}>
      <RootStack.Navigator>
          {/*returnMainRootStackGroup()*/}
          <RootStack.Screen name="Learn Flex" component={MainScreen}
          options={mainScreenOptions} 
          />
          <RootStack.Screen name="Flex Values" component={ChangeFlexPropertiesScreen}
          options={detailScreenOptionsiOS}/>
          <RootStack.Screen name="About Learn Flex" component={AboutScreen}
           options={detailScreenOptionsiOS}/>
      </RootStack.Navigator>
      </SettingsContext.Provider>
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