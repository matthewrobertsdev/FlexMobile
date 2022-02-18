import React from 'react';
import {
  ScrollView,
  StatusBar,
} from 'react-native';
import {PickerIOS} from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const FlexPropertiesScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar/>
      <ScrollView>
        <PickerIOS>
          <PickerIOS.Item label="Java" value="java" />
          <PickerIOS.Item label="JavaScript" value="js" />
        </PickerIOS>
      </ScrollView>
    </SafeAreaView>
  )
}
export default FlexPropertiesScreen