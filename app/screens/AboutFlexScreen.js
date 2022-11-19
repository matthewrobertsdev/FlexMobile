/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useContext, useEffect, useState} from 'react';
 import {
   StatusBar,
   View,
   ScrollView,
   useColorScheme,
   SafeAreaView,
   Image,
   Text
 } from 'react-native';

 import { SettingsContext } from '../App';
 import loadSettings from '../utilities/loadSettings'
 import DrawerToggleButton from '../components/DrawerToggleButton'


 function AboutFlexScreen({navigation}) {
  const [loaded, setLoaded]=useState(false)
  const [settings, setSettings] = useContext(SettingsContext);

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    //load settings if necessary
    if (settings === undefined) {
      loadSettings().then(savedState => {
        setSettings(savedState)
        setLoaded(true)
      })
    } else {
      setLoaded(true)
    }
    if (Platform.OS==='android') {
    const timer=setTimeout(()=>{
      setLoaded(true)
      navigation.setOptions({
        headerShown: true,
        headerTitle: 'About Flexbox',
        headerStyle: { backgroundColor: 'rgb(230, 136, 0)' },
        headerRight: () => <DrawerToggleButton navigation={navigation}/>,
      })
    } , 1000)
    return () => clearTimeout(timer );
  }
  }, [navigation, loaded, settings, isDarkMode]);
  if (loaded || Platform.OS=='ios') {
  return (
     <>
       <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
       <ScrollView>
         <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
         </View>
       </ScrollView>
     </>
   )
  } else {
    return (
      <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="rgb(255,59,48)"/>
      <SafeAreaView>
      <View style={{height: 100, backgroundColor: 'rgb(255,59,48)'}}/>
      <View style={{width: '100%', height: '100%', backgroundColor: 'rgb(255,59,48)', 
      alignItems: 'center'}}>
        <Image style={{width: 200, height: 200, marginBottom: 30}} source={require('../resources/Icon.png')}
        accessibilityLabel="Learn Flex icon"/>
        <Text style={{color: 'white', fontSize: 40}}>Learn Flex</Text>
      </View>
    </SafeAreaView>
    </>
    )
  }
 };
 
 export default AboutFlexScreen;
 