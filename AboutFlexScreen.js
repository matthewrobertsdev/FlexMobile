/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect, useState, useContext} from 'react';
 import {
   StatusBar,
   View,
   ScrollView,
   useColorScheme,
   ActivityIndicator
 } from 'react-native';
 import { SettingsContext } from './App';
 import loadSettings from './loadSettings'

 function AboutFlexScreen({navigation}) {

  const [loaded, setLoaded]=useState(false)
  const [settings, setSettings] = useContext(SettingsContext);

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTitle: 'About Flexbox',
        headerStyle: { backgroundColor: 'rgb(230 136 0)'},
        headerRight: () => <DrawerToggleButton navigation={navigation}/>,
      })
  }
  }, [navigation, isDarkMode]);
   return (
     <>
       <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
       <ScrollView>
         <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
         </View>
       </ScrollView>
     </>
   )
 };
 
 export default AboutFlexScreen;
 