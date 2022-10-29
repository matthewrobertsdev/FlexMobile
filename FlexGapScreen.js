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
   useColorScheme,
 } from 'react-native';
  
 import { useHeaderHeight } from '@react-navigation/elements';
 
 function FlexGapScreen({navigation}) {
   const isDarkMode = useColorScheme() === 'dark';
   const headerHeight = useHeaderHeight();


  if (Platform.OS === 'ios') {
    scrollViewTopMargin = headerHeight
  }
   useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: false,
        headerStyle: { backgroundColor: 'rgb(0, 142, 0)' },
        title: "Flex Gap",
      })
     }
  }, []);
  
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
 
 export default FlexGapScreen;
 