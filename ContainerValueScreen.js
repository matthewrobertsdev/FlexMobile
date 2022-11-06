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


const AboutFlexContainerScreen = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
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

  const pickerForegroundColor = 'rgb(40, 130, 255)'


  if (Platform.OS === 'ios') {
  }
  useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: false,
        headerStyle: { backgroundColor: isDarkMode ? 'blue' : 'blue' },
        title: "Container Value",
      })
     }
  }, []);
  return (
    <SafeAreaView edges={['left', 'right']}  style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      <ScrollView>
        <View style={{height: 40}}/>
        <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <Text style={{fontSize: 25, color: pickerForegroundColor}}>{`${title}:`}</Text>
        <PropertyPicker properties={values} selectedProperty={settings[key]}
        onValueChange={(itemValue, _) => {
          savePropertyValueWithKey(key, itemValue)
          }} />
          </View>
      </ScrollView>
      </SafeAreaView>
  )
}
export default AboutFlexContainerScreen