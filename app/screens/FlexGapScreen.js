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
import { styles } from '../styles/Styles';
   
 function FlexGapScreen() {
  
   return (
     <>
       <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
       <ScrollView>
         <View style={styles.containerView}>
         </View>
       </ScrollView>
     </>
   )
 };
 
 export default FlexGapScreen;
 