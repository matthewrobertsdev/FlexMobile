import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ContainerTeachingTitle from '../components/ContainerTeachingTitle';
import TeachingText from '../components/TeachingText';
import SpacerView from '../components/SpacerView'
import { styles } from '../styles/Styles';

const AboutFlexContainerScreen = () => {

  return (
    <SafeAreaView edges={['left', 'right']}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ScrollView>
        <View style={styles.containerView}>
          <ContainerTeachingTitle>flexbox container</ContainerTeachingTitle>
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
          <ContainerTeachingTitle>justify-content</ContainerTeachingTitle>
          <TeachingText>
            justify-content determines how your content in your flex container is laid out along the axis
            determined by flex-direction.  flex-start will have your content be aligned at the start of 
            this axis.  flex-end will have your content be aligned at the end of this axis.  center will have 
            your content aligned at the center of this axis. space-between will have the content spread out as
            much as possible along this axis.  space-around will spread the content out across the axis, with
            space spread around each view or element.  space-evenly will have the space divided up and put equally
            between elements and at the beginning and end of the axis.
          </TeachingText>
          <ContainerTeachingTitle>align-content</ContainerTeachingTitle>
          <TeachingText>
            align-content determines how your content in your flex container is laid out along the axis
            perpendicular to the one determined by flex-direction.  flex-start will have your content be 
            aligned at the start of this axis.  flex-end will have your content be aligned at the end of 
            this axis.  center will have your content aligned at the center of this axis. space-between 
            will have the content spread out as much as possible along this axis.  space-around will 
            spread the content out across the axis, with space spread around each view or element, resulting
            in less space at the ends of the axis.  space-evenly will have the space divided up and put 
            equally between elements and at the beginning and end of the axis.
          </TeachingText>
          <ContainerTeachingTitle>align-items</ContainerTeachingTitle>
          <TeachingText>
            align-items determines how your content in your flex container is laid out perpendicular to 
            the axis determined by flex-direction but within that row or column.  flex-start will make it
            all aligned at the start of that perpendicular axis within the row or column.  flex-end will
            make it all aligned at the end of that perpendicular axis within the row or column.  center
            will make it aligned along the center of the perpendicular axis of the row or column. stretch
            makes the items fill the entire height of the row or width of the column. baseline
            aligns the items "baslines" (think aligning along the baseline of their text or similar content)
          </TeachingText>
        </View>
        <SpacerView />
      </ScrollView>
    </SafeAreaView>
  )
}
export default AboutFlexContainerScreen