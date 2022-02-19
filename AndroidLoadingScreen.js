import React, {useEffect, useState, useContext} from 'react';

import {
  View,
  Image,
  SafeAreaView,
  Text,
} from 'react-native';

//import loadSettings from '../state/loadSettings'

import { SettingsContext } from './RootStackScreen';

function AndroidLoadingScreen({navigation}) {

  const [settings, setSettings] = useContext(SettingsContext);

  //initialize with settings
  useEffect(() => {
    //loadSettings().then(savedState => {
      //setSettings(savedState)
    //})
    setTimeout(()=>{navigation.navigate('Learn Flex'), {state: settings}}, 1000)
  }, []);
  //view
  return (
    <SafeAreaView>
      <View style={{height: 100, backgroundColor: 'rgb(255,59,48)'}}/>
      <View style={{width: '100%', height: '100%', backgroundColor: 'rgb(255,59,48)', 
      alignItems: 'center'}}>
        <Image style={{width: 200, height: 200, marginBottom: 30}} source={require('./resources/Icon.png')}
        accessibilityLabel="Learn Flex icon"/>
        <Text style={{color: 'white', fontSize: 40}}>Learn Flex</Text>
      </View>
    </SafeAreaView>
  );
}
export default AndroidLoadingScreen;
