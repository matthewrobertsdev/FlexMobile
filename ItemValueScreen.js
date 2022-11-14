import React, {useEffect, useContext} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SettingsContext } from './App';
import PropertyPicker from './PropertyPicker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpacerView from './components/SpacerView';
import { styles } from './Styles';


const ItemValueScreen = ({route}) => {
  const [settings, setSettings] = useContext(SettingsContext);
  const { title, key, values } = route.params;

  const savePropertyValueWithKey = (key, value) => {
    try {
      const jsonData = JSON.stringify(value)
      AsyncStorage.setItem(key, jsonData)
      setSettings({ ...settings, [key]: value })
    } catch (e) {
      console.log(e)
      // saving error
    }
  }

  const textColor = 'rgb(136, 64, 255)'

  return (
    <SafeAreaView edges={['left', 'right']}  style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      <ScrollView>
        <SpacerView/>
        <View style={styles.teachingView}>
      <Text style={{fontSize: 25, color: textColor}}>{`${title}:`}</Text>
        <PropertyPicker properties={values} selectedProperty={settings[key]}
        onValueChange={(itemValue, _) => {
          savePropertyValueWithKey(key, itemValue)
          }}/>
          </View>
      </ScrollView>
      </SafeAreaView>
  )
}
export default ItemValueScreen