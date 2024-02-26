import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ItemsTeachingTitle from '../components/ItemsTeachingTitle';
import TeachingText from '../components/TeachingText';
import SpacerView from '../components/SpacerView'
import { styles } from '../styles/Styles';

const AboutFlexItemsScreen = () => {

  return (
    <SafeAreaView edges={['left', 'right']}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ScrollView>
        <View style={styles.containerView}>
          <ItemsTeachingTitle>flexbox items</ItemsTeachingTitle>
          <TeachingText>
            Flexbox items are the individual views or elements in your Flexbox container.
            Flexbox lets you apply some properties to individual items, or you can assign them to
            all the items individually if you want all the items to have these properties.
          </TeachingText>
          <ItemsTeachingTitle>flex-basis</ItemsTeachingTitle>
          <TeachingText>
          "flex-basis" is how much space an item will take up if left alone.  In web development, an item's
          "flex-basis" unit can be any size unit or "auto", but in other frameworks, the units may 
          be more limited.  For example, in React Native, with which this app is coded, "flex-basis" 
          should be either a unitless number, (if you are specifiying pixels), a percent, or the string 
          "auto".  It is "auto" by default, and "auto" will make it use its intrinsic size, (think, 
          for example, of the size determined by text plus padding)
          </TeachingText>
          <ItemsTeachingTitle>flex-grow</ItemsTeachingTitle>
          <TeachingText>
          "flex-grow" is how much an item will tend to grow relative to other items along the axis specified
          by the flex container's "flex-direction".  If there is extra space in the row or column, Flexbox
          will distribute this extra space proportionally to each individual flex item according to its 
          "flex-grow" values.  If "flex-grow" is assigned 0 (or left alone), the flex item will not grow.
          Valid "flex-grow" values are numbers.
          </TeachingText>
          <ItemsTeachingTitle>flex-shrink</ItemsTeachingTitle>
          <TeachingText>
          "flex-shrink" determines to what degree an element will shrink to fit the main axis if 
          it would otherwise be too large for the main axis.  Flexbox will shrink items proportionally 
          relative to each other's "flex-shrink" so that they fit in the axis, if possible.  Valid 
          "flex-shrink" values are numbers.
          </TeachingText>
          <ItemsTeachingTitle>align-self</ItemsTeachingTitle>
          <TeachingText>
          "align-self" let's you essentially override the "align-items" property of the container
          for an individual view or element.  "align-self" determines how your item in your 
          flex container is laid out perpendicular to the axis determined by "flex-direction" 
          but within that row or column.  "flex-start" will align the item at the start 
          of the perpendicular axis within the row or column.  "flex-end" will align the item at the end of that perpendicular axis within the row or column.  "center" will align the item with the center of the perpendicular axis of the row or column. "stretch" makes the 
          items fill the entire height of the row or width of the column. "baseline" aligns the items 
          "baselines" with the row or column (think aligning with the baseline of the item's text or 
          similar content).
          </TeachingText>
        </View>
        <SpacerView />
      </ScrollView>
    </SafeAreaView>
  )
}
export default AboutFlexItemsScreen