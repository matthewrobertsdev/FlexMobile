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

 import OrderTeachingTitle from '../components/OrderTeachingTitle'
 import TeachingText from '../components/TeachingText'

   
 function FlexOrderScreen() {
  
   return (
     <>
       <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
       <ScrollView>
         <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
          <OrderTeachingTitle>order</OrderTeachingTitle>
          <TeachingText>
            Flexbox lets you visually change the order of items in the flexbox container with
            the "order" property.  Each flex item may be assigned an integer to its "order" property.
            The items will then be laid out with the items with the lowest order number laid out 
            first.  In the event that more than one item has the same order value, these items will 
            be laid out in the order they are used in the source code.
          </TeachingText>
          <OrderTeachingTitle>accessibility</OrderTeachingTitle>
          <TeachingText>
            Because the source order of the items is not changed and the order is only changed visually,
            screen readers that read aloud the contents of the container will read them aloud in source
            order, as opposed to the order determined by the "order" property.  Therefore, be careful
            if you choose to use the order property as it may interfere with the accessibility of your app
            or webpage.
          </TeachingText>
         </View>
       </ScrollView>
     </>
   )
 };
 
 export default FlexOrderScreen;
 