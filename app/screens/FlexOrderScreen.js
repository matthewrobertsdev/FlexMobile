/**
 * Spiffy Clock Color Screen
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   StatusBar,
   View,
   ScrollView,
 } from 'react-native';
   
 function FlexOrderScreen() {
  
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
 
 export default FlexOrderScreen;
 