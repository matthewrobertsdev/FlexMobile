import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ContainerTeachingTitle from './components/ContainerTeachingTitle';
import TeachingText from './components/TeachingText';
import SpacerView from './components/SpacerView'
import { styles } from './Styles';

const AboutFlexContainerScreen = () => {

  return (
    <SafeAreaView edges={['left', 'right']}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ScrollView>
        <View style={styles.containerView}>
          <ContainerTeachingTitle>Layout Manager</ContainerTeachingTitle>
          <TeachingText>
            Flexbox manages how elements or views are layed out on the screen in a flex container.  The first step
            towards using flex is simply to assign "flex" to the display style property.  This will make the container
            a flexbox container so that you can use flexbox for determining how the views are arranged in the container.
          </TeachingText>
          <ContainerTeachingTitle>flex-wrap</ContainerTeachingTitle>
          <TeachingText>
            If your flex container view has a size assigned to it, such as from assigning it a width and a height,
            you can assign the flex-wrap property "wrap" and flexbox will try to wrap your views to fit within
            the flex container.  Otherwise, your views will just be laid out in a line even if this means going
            beyond the boundaries of the container.  Alternately, you can not assign it a size and can assign it
            "nowrap" and your flex container will expand in a line to fit all your views inside of it.
          </TeachingText>
          <ContainerTeachingTitle>flex-direction</ContainerTeachingTitle>
          <TeachingText>
            flex-direction determines the overall flow of how your views are layed out.  If you asign it "row",
            it will have your items in your flex container laid out from left to right, wrapping to fit the
            container if you have a defined size for the container and "wrap" to the flex-wrap property.
            If you assign it "column", it will do the smae things but laid out from top to bottom.  If you assign
            it "row-reverse", it will make evrything go from right to left, and if you assign it "column-reverse",
            it will make everything go from bottom to top.
          </TeachingText>
        </View>
        <SpacerView />
      </ScrollView>
    </SafeAreaView>
  )
}
export default AboutFlexContainerScreen