import React, {useContext, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
  Platform,
  Button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropertyPicker from './PropertyPicker'
import { SettingsContext } from './App';
import { useHeaderHeight } from '@react-navigation/elements';
import AsyncStorage from '@react-native-async-storage/async-storage';


const flexDirectionValues=['row', 'column', 'row-reverse', 'column-reverse']
const justifyContentValues=['flex-start', 'flex-end', 'center', 'space-between',
'space-around', 'space-evenly']
const alignContentValues=['flex-start', 'flex-end', 'center', 'stretch',
'space-between', 'space-around']
const alignItemsValues=['flex-start', 'flex-end', 'center', 'stretch',
'baseline']

jsonArray = [
{title: 'flex-direction', key: 'flexDirection', values: flexDirectionValues}, 
{title: 'justify-content', key: 'justifyContent', values: justifyContentValues}, 
{title: 'align-content', key: 'alignContent', values: alignContentValues},
{title: 'align-items', key: 'alignItems', values: alignItemsValues}
]
const ChangeFlexContainerScreen = ({navigation}) => {
  const [settings, setSettings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';
  const headerHeight = useHeaderHeight();

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

  let scrollViewTopMargin = 0

  const pickerForegroundColor = 'rgb(40, 130, 255)'

  if (Platform.OS === 'ios') {
    scrollViewTopMargin = headerHeight
  }
  useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: false,
        headerStyle: { backgroundColor: isDarkMode ? 'blue' : 'blue' },
        title: "Flex Container Values",
      })
     }
  }, []);
  if (Platform.OS === 'ios') {
    return (
      <>
      <View style={{height: 40}}></View>
      {jsonArray.map((json, index) => <Button title={`Change ${json.title}`} key={index}
      onPress={() => { navigation.navigate('Change Container Value', 
      {title: json.title, key: json.key, values: json.values})
      }}/>)}
      </>
    )
  } else {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      <ScrollView>
      <View style={{display: 'flex', alignItems: 'center', width: '100%', 
      marginTop: 20}}>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>flex-direction:</Text>
        <PropertyPicker properties={flexDirectionValues} selectedProperty={settings.flexDirection}
        onValueChange={(itemValue, _) => {
          savePropertyValueWithKey('flexDirection', itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>justify-content:</Text>
        <PropertyPicker properties={justifyContentValues} selectedProperty={settings.justifyContent}
        onValueChange={(itemValue, _) => {
          savePropertyValueWithKey('justifyContent', itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>align-content:</Text>
        <PropertyPicker properties={alignContentValues} selectedProperty={settings.alignContent}
        onValueChange={(itemValue, _) => {
          savePropertyValueWithKey('alignContent', itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>align-items:</Text>
          <PropertyPicker properties={alignItemsValues} selectedProperty={settings.alignItems}
        onValueChange={(itemValue, _) => {
          savePropertyValueWithKey('alignItems', itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
  }
}
export default ChangeFlexContainerScreen