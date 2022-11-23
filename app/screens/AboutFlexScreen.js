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
 import AboutTeachingTitle from '../components/AboutTeachingTitle'
 import TeachingText from '../components/TeachingText'
 import SpacerView from '../components/SpacerView';

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
       <SafeAreaView edges={["left", "right"]}>
       <ScrollView>
         <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
         <AboutTeachingTitle>flexbox</AboutTeachingTitle>
          <TeachingText>
            Flexbox is a css layout manager that i sused in web development as well as in 
            mobile development frameworks such as React Native that use web technologies.
            It lays out views or elements in rows or columns and any given flexbox and its 
            child items are highly configurable in terms of how things are laid out.
          </TeachingText>
          <AboutTeachingTitle>syntax</AboutTeachingTitle>
          <TeachingText>
            The exact syntax is pretty unifrom across web development, as it just uses css 
            directly.  However, you will see some differences outside of web devlopment in syntax.
            For example, in React Native, "flex-direction" is coded as flexDirection.  You should look up
            the syntax used in whatever framework you are using if it differs from plain css.
          </TeachingText>
          <AboutTeachingTitle>this app</AboutTeachingTitle>
          <TeachingText>
            Use this app to familiarize yourself with flexbox container and item properties.  
            Many of the properties are demonstrated in this app with their actual usage in this
            app.  You can see flexbox in action.  Because this app is built with React Native, certain
            properties, namely "flex-order" and "row-gap", which are not available
            in React Native, are discussed but cannot be demonsrated here.  Please note: all the flex
            items in this app are given a small margin so that they will not be bumping up against
            each other and so that it will be clear where one item ends and the next begins.
            
          </TeachingText>
         </View>
         <SpacerView />
       </ScrollView>
       </SafeAreaView>
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
 