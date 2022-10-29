/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useEffect, useContext} from 'react';
 import {
   StatusBar,
   Button,
   Text,
   View,
   ScrollView,
   useColorScheme,
 } from 'react-native';
 import { SettingsContext } from './App';

 import { useHeaderHeight } from '@react-navigation/elements';
 
 function FlexItemsScreen({navigation}) {
   const isDarkMode = useColorScheme() === 'dark';
   const [settings, setSettings] = useContext(SettingsContext);
   const headerHeight = useHeaderHeight();


  if (Platform.OS === 'ios') {
    scrollViewTopMargin = headerHeight
  }
   useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: false,
        headerStyle: { backgroundColor: 'rgb(93, 0, 255)' },
        title: "Flex Items",
      })
     }
  }, []);
  
   return (
     <>
       <StatusBar barStyle={'light-content'} backgroundColor={'rgb(93, 0, 255)'}/>
       <ScrollView>
         <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
         <View style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Button title='About Flexbox Items' color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(136, 64, 255)' : 'rgb(93, 0, 255)') : 'rgb(93, 0, 255)'} />
          </View>
          <View style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 15 }}>
            <Button title="Change Flex Items' Values" 
            color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(136, 64, 255)' : 'rgb(93, 0, 255)') : 'rgb(93, 0, 255)'}
            onPress={() => { navigation.navigate('Flex Items\' Values') }} />
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
              With "wrap" assigned and defined width and height, and the flex container settings applied:
            </Text>
          </View>
          <ScrollView horizontal={true}>
          <View style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', marginTop: 20 }}>
            <View style={{
              display: 'flex', width: 300, height: 300, flexWrap: 'wrap', flexDirection: settings.flexDirection,
              justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
              backgroundColor: isDarkMode ? 'rgb(50,50,50)' : 'gray', borderRadius: 20
            }}>
                <View style={{
                  padding: 10,
                  backgroundColor: 'rgb(93, 0, 255)', borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5, flexGrow: 1, 
                  flexBasis: settings.flexBasisFor1, flexGrow: settings.flexGrowFor1,
                  flexShrink: settings.flexShrinkFor1, alignSelf: settings.alignSelfFor1
                }} key={'1'}>
                  <Text style={{ color: isDarkMode ? 'white' : 'white', fontSize: 20 }}>
                    {'1'}
                  </Text>
                </View>
                <View style={{
                  padding: 10,
                  backgroundColor: 'rgb(93, 0, 255)', borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5, 
                  flexBasis: settings.flexBasisFor2abc, flexGrow: settings.flexGrowFor2abc,
                  flexShrink: settings.flexShrinkFor2abc, alignSelf: settings.alignSelfFor2abc
                }} key={'2abc'}>
                  <Text style={{ color: isDarkMode ? 'white' : 'white', fontSize: 20 }}>
                    {'2abc'}
                  </Text>
                </View>
                <View style={{
                  padding: 10,
                  backgroundColor: 'rgb(93, 0, 255)', borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5,
                  flexBasis: settings.flexBasisFor3h, flexGrow: settings.flexGrowFor3h,
                  flexShrink: settings.flexShrinkFor3h, alignSelf: settings.alignSelfFor3h
                }} key={'3\nh'}>
                  <Text style={{ color: isDarkMode ? 'white' : 'white', fontSize: 20 }}>
                    {'3\nh'}
                  </Text>
                </View>
            </View>
          </View>
          </ScrollView>
          <View style={{
            display: 'flex', alignItems: 'center', width: '100%',
            marginTop: 20
          }}>
          </View>
          <View style={{height: 40}}></View>
         </View>
       </ScrollView>
     </>
   )
 };
 
 export default FlexItemsScreen;
 