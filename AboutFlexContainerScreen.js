import React, {useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from '@react-navigation/elements';

const AboutFlexContainerScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  if (Platform.OS === 'ios') {
  }
  useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: false,
        headerStyle: { backgroundColor: isDarkMode ? 'blue' : 'blue' },
        title: "About Containers",
      })
     }
  }, []);
  return (
    <SafeAreaView edges={['left', 'right']}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      <ScrollView>
      <View style={{display: 'flex', alignItems: 'center', width: '100%', marginTop: 20}}>
        <View backgroundColor={'blue'} style={{padding: 10, borderRadius: 10, margin: 20}}>
        <Text style={{fontSize: 25, color: 'white'}}>Layout Manager</Text>
        </View>
        <Text style={{fontSize: 20, color: isDarkMode ? 'white' : 'black', marginHorizontal: 10}}>
          Flexbox manages how elements or views are layed out on the screen in a flex container.  The first step
          towards using flex is simply to assign "flex" to the display style property.  This will make the container
          a flexbox container so that you can use flexbox for determining how the views are arranged in the container.
        </Text>
        <View backgroundColor={'blue'} style={{padding: 10, borderRadius: 10, margin: 20}}>
        <Text style={{fontSize: 25, color: 'white'}}>flex-wrap</Text>
        </View>
        <Text style={{fontSize: 20, color: isDarkMode ? 'white' : 'black', marginHorizontal: 10}}>
          If your flex container view has a size assigned to it, such as from assigning it a width and a height,
          you can assign the flex-wrap property "wrap" and flexbox will try to wrap your views to fit within
          the flex container.  Otherwise, your views will just be laid out in a line even if this means going 
          beyond the boundaries of the container.  Alternately, you can not assign it a size and can assign it 
          "nowrap" and your flex container will expand in a line to fit all your views inside of it.
        </Text>
        <View backgroundColor={'blue'} style={{padding: 10, borderRadius: 10, margin: 20}}>
        <Text style={{fontSize: 25, color: 'white'}}>flex-direction</Text>
        </View>
        <Text style={{fontSize: 20, color: isDarkMode ? 'white' : 'black', marginHorizontal: 10}}>
          flex-direction determines the overall flow of how your views are layed out.  If you asign it "row",
          it will have your items in your flex container laid out from left to right, wrapping to fit the 
          container if you have a defined size for the container and "wrap" to the flex-wrap property.
          If you assign it "column", it will do the smae things but laid out from top to bottom.  If you assign
          it "row-reverse", it will make evrything go from right to left, and if you assign it "column-reverse",
          it will make everything go from bottom to top.
        </Text>
      </View>
      <View style={{height: 40}}></View>
      </ScrollView>
      </SafeAreaView>
  )
}
export default AboutFlexContainerScreen