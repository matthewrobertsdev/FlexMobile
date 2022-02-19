import React, {useState} from 'react'
import { Button, Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from './MainScreen'
import ChangeFlexPropertiesScreen from './ChangeFlexPropertiesScreen'
import AndroidLoadingScreen from './AndroidLoadingScreen'
import AboutScreen from './AboutScreen'

const mainScreenOptions = ({ navigation }) => ({
  title: 'Learn Flex',
  headerShown: false,
})

const loadingScreenOptions = ({navigation}) => ({
  headerShown: false,
})


const RootStack = createNativeStackNavigator();
let modalScreenOptions
if (Platform.OS === 'ios') {
  modalScreenOptions =
    ({ navigation }) => ({
      presentation: 'modal',
      headerRight: () => (
        <Button
          onPress={() => navigation.goBack()}
          title="Done"
          color='red'
        />
      ),
    })
} else {
  modalScreenOptions =
    { presentation: 'modal', }
}

export const SettingsContext = React.createContext();

function RootStackScreen() {
  const [settings, setSettings]=useState({justifyContent: 'flex-start', alignContent: 'flex-start', 
  flexDirection: 'row', alignItems: 'flex-start'})
  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
    <RootStack.Navigator>
        {/*returnMainRootStackGroup()*/}
      <RootStack.Group>
        <RootStack.Screen name="Learn Flex" component={MainScreen} 
        options={mainScreenOptions}/>
        <RootStack.Screen name="Flex Values" component={ChangeFlexPropertiesScreen} 
        options={modalScreenOptions}/>
        <RootStack.Screen name="About Learn Flex" component={AboutScreen}/>
      </RootStack.Group>
    </RootStack.Navigator>
    </SettingsContext.Provider>
  );
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