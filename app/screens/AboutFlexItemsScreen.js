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
            Flexbox items are the individual views or elements in your flexbox container.
            Flexbox let's you apply some properties to individual items, or you can assigned them to
            all the items individually if you want all the items to have these properties.
          </TeachingText>
          <ItemsTeachingTitle>flex-basis</ItemsTeachingTitle>
          <TeachingText>
          "flex-basis" is how much space an item will take up if left alone.
          </TeachingText>
          <ItemsTeachingTitle>flex-grow</ItemsTeachingTitle>
          <TeachingText>
          "flex-grow" is how much an item will tend to grow relative to other items along the axis specified
          by the flex container's "flex-direction".
          </TeachingText>
          <ItemsTeachingTitle>flex-shrink</ItemsTeachingTitle>
          <TeachingText>
          "flex-shrink" determines to what degree an element will shrink to fit this main axis if 
          it's "flex-basis" would make it too large for the main axis.
          </TeachingText>
          <ItemsTeachingTitle>align-self</ItemsTeachingTitle>
          <TeachingText>
          "align-self" let's you essentially override the "align-items" property of the container
          for an individual view or element.
          </TeachingText>
        </View>
        <SpacerView />
      </ScrollView>
    </SafeAreaView>
  )
}
export default AboutFlexItemsScreen