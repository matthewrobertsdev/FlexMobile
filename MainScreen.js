/**
 * Learn Flex
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Image,
  Platform,
  ActivityIndicator
} from 'react-native';

import { SettingsContext } from './App';
import DrawerToggleButton from './DrawerToggleButton';
import loadSettings from './loadSettings'


let nums = ['1', '2abc', '3\nh', '4', '5\ni', '6def', '7']

const MainScreen = ({ navigation }) => {
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
    if (Platform.OS==='ios') {
      navigation.setOptions({
        headerShown: true,
        headerBlurEffect: 'regular',
        headerTintColor: isDarkMode ? 'white' : 'white'
      })
    } else {
    const timer=setTimeout(()=>{
      setLoaded(true)
      navigation.setOptions({
        headerShown: true,
        headerTitle: 'Container Properties',
        headerStyle: { backgroundColor: isDarkMode ? 'blue' : 'blue' },
        headerRight: () => <DrawerToggleButton navigation={navigation}/>,
      })
    } , 1000)
    return () => clearTimeout(timer );
  }
  }, [navigation, loaded, settings, isDarkMode]);
  if (settings === undefined) {
    return (
      <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  } else if (loaded || Platform.OS=='ios') {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      <ScrollView>
        <View style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
          marginTop: 20
        }}>
          <View style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Button title='About Flexbox Containers' color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(53,139,255)' : 'blue') : 'blue'}
            onPress={() => { navigation.navigate('About Flex Containers') }} />
          </View>
          <View style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 15 }}>
            <Button title='Change Flex Container Values' color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(53,139,255)' : 'blue') : 'blue'}
            onPress={() => { navigation.navigate('Flex Container Values') }} />
          </View>
          <View style={{
            display: 'flex', alignItems: 'center', width: '100%',
            marginTop: 15
          }}>
          </View>
          <View style={{
            display: 'flex', alignItems: 'center', width: '100%',
            marginTop: 15
          }}>
            <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center' }}>
              With "wrap" assigned and defined width and height:
            </Text>
          </View>
          <ScrollView horizontal={true}>
          <View style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', marginTop: 20 }}>
            <View style={{
              display: 'flex', width: 300, height: 300, flexWrap: 'wrap', flexDirection: settings.flexDirection,
              justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
              backgroundColor: isDarkMode ? 'rgb(50,50,50)' : 'gray', borderRadius: 20
            }}>
              {nums.map((value, index) => {
                return <View style={{
                  padding: 10,
                  backgroundColor: isDarkMode ? 'blue' : 'blue'/*'rgb(96, 31, 159)' : 'rgb(183,84,233)'*/, borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5
                }} key={value}>
                  <Text style={{ color: isDarkMode ? 'white' : 'white', fontSize: 20 }}>
                    {value}
                  </Text>
                </View>
              })}
            </View>
          </View>
          </ScrollView>
          <View style={{
            display: 'flex', alignItems: 'center', width: '100%',
            marginTop: 20
          }}>
            <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center'}}>
              With "nowrap" assigned and no width and no height defined:
            </Text>
          </View>
          <ScrollView horizontal={true}>
          <View style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', marginTop: 20 }}>
            <View style={{
              display: 'flex', flexWrap: 'nowrap', flexDirection: settings.flexDirection,
              justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
              backgroundColor: isDarkMode ? 'rgb(50,50,50)' : 'gray',
              borderRadius: 20
            }}>
              {nums.map((value, index) => {
                return <View style={{
                  padding: 10,
                  backgroundColor: isDarkMode ? 'blue' : 'blue'/*'rgb(96, 31, 159)' : 'rgb(183,84,233)'*/, borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5
                }} key={value}>
                  <Text style={{ color: isDarkMode ? 'white' : 'white', fontSize: 20 }}>
                    {value}
                  </Text>
                </View>
              })}
            </View>
          </View>
          </ScrollView>
          <View style={{height: 40}}></View>
        </View>
      </ScrollView>
      </>
  );
            } else {
              return (
                <>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="rgb(255,59,48)"/>
                <SafeAreaView>
                <View style={{height: 100, backgroundColor: 'rgb(255,59,48)'}}/>
                <View style={{width: '100%', height: '100%', backgroundColor: 'rgb(255,59,48)', 
                alignItems: 'center'}}>
                  <Image style={{width: 200, height: 200, marginBottom: 30}} source={require('./resources/Icon.png')}
                  accessibilityLabel="Learn Flex icon"/>
                  <Text style={{color: 'white', fontSize: 40}}>Learn Flex</Text>
                </View>
              </SafeAreaView>
              </>
              )
            }
};

export default MainScreen;
