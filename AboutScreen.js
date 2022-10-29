/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect} from 'react';
 import {
   StatusBar,
   View,
   ScrollView,
   Text,
   useColorScheme,
   Image
 } from 'react-native';
  
 import ButtonWithMargin from './components/ButtonWithMargin'
 import openUrl from './utilities/openUrl'
 import { useHeaderHeight } from '@react-navigation/elements';
 import DrawerToggleButton from './DrawerToggleButton'
 
 function AboutScreen({navigation}) {
   const versionNumString='1'
   const isDarkMode = useColorScheme() === 'dark';
   const textColor = isDarkMode ? 'white' : 'black'
   const headerHeight = useHeaderHeight();

  let scrollViewTopMargin = 0

  if (Platform.OS === 'ios') {
    scrollViewTopMargin = headerHeight
  }
   useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: false,
        headerStyle: { backgroundColor: isDarkMode ? 'rgb(207,0,30)' : 'rgb(255,59,48)' },
        title: "About Learn Flex",
      })
     }
  }, []);
  
   return (
     <>
       <StatusBar barStyle={'light-content'} backgroundColor={isDarkMode ? 'rgb(207,0,30)' : 'rgb(255,59,48)'}/>
       <ScrollView>
         <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
           <Image style={{ width: 150, height: 150, margin: 20 }} 
           source={require('./resources/Icon.png')}
           accessibilityLabel="Learn Flex icon"/>
           <Text style={{ color: textColor, fontSize: 20, margin: 7.5 }}>
             Learn Flex
           </Text>
           <Text style={{ color: textColor, fontSize: 20, margin: 7.5 }}>
             Version 1.0 ({versionNumString})
           </Text>
           <Text style={{ color: textColor, fontSize: 20, margin: 7.5, textAlign: 'center', marginBottom: 12.5}}>
             {'Copyright © 2022 Matt Roberts.  \nAll rights reserved.'}
           </Text>
             <ButtonWithMargin text='Frequently Asked Questions' onPress={
               () => {
                 openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/faq')
               }
             } color={isDarkMode ? 'rgb(255,52,52)' : 'rgb(255,59,48)'}/>
             <ButtonWithMargin text='Home Page' onPress={
               () => {
                 openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/')
               }
             } color={isDarkMode ? 'rgb(255,52,52)' : 'rgb(255,59,48)'}/>
             <ButtonWithMargin text='Contact the Developer' onPress={
               () => {
                 openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/contact')
               }
             } color={isDarkMode ? 'rgb(255,52,52)' : 'rgb(255,59,48)'}/>
             <ButtonWithMargin text='Privacy Policy' onPress={
               () => {
                 openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/privacy')
               }
             } color={isDarkMode ? 'rgb(255,52,52)' : 'rgb(255,59,48)'}/>
         </View>
       </ScrollView>
     </>
   )
 };
 
 export default AboutScreen;
 