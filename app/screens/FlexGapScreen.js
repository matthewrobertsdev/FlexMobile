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
   SafeAreaView
 } from 'react-native';
import { styles } from '../styles/Styles';

import GapTeachingTitle from '../components/GapTeachingTitle';
import TeachingText from '../components/TeachingText';
import SpacerView from '../components/SpacerView';

   
 function FlexGapScreen() {
  
   return (
     <>
       <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
       <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
       <ScrollView>
         <View style={styles.containerView}>
          <GapTeachingTitle>gap</GapTeachingTitle>
          <TeachingText>
            Flexbox has various ways to assign a minimum spacing between rows and columns.
            If this minimum spacing is already satisifed, the "gap" property will do nothing.  Please note:
            as of the writing of this app, React Native (what this app is coded in) does not use "gap",
            so it will not be demonstrated here.  However, it is not a hard concept and is explained here.
            Assign "gap" a size to give your flex container a minimu spacing for rows and columns.  If you 
            define two sizes, the first will be used for rows and the second will be used for columns.
          </TeachingText>
          <GapTeachingTitle>row-gap</GapTeachingTitle>
          <TeachingText>
            "row-gap" specifically assigns a minimum gap between rows.  Use a size for it if you want
            your flex container to have a minimum gap between its rows.
          </TeachingText>
          <GapTeachingTitle>column-gap</GapTeachingTitle>
          <TeachingText>
            "column-gap" specifically assigns a minimum gap between columns.  Use a size for it if you want
            your flex container to have a minimum gap between its columns.
          </TeachingText>
          <SpacerView/>
         </View>
       </ScrollView>
       </SafeAreaView>
     </>
   )
 };
 
 export default FlexGapScreen;
 