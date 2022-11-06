import React, {useContext, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme
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

const ChangeFlexContainerScreen = ({navigation}) => {
  const [settings, setSettings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';
  const headerHeight = useHeaderHeight();

  const saveFlexDirection = async (state) => {
    try {
      await AsyncStorage.setItem('flexDirection', state)
    } catch (e) {
      // saving error
    }
  }

  const saveJustifyContent = async (state) => {
    try {
      await AsyncStorage.setItem('justifyContent', state)
    } catch (e) {
      // saving error
    }
  }

  const saveAlignContent = async (state) => {
    try {
      await AsyncStorage.setItem('alignContent', state)
    } catch (e) {
      // saving error
    }
  }

  const saveAlignItems = async (state) => {
    try {
      await AsyncStorage.setItem('alignItems', state)
    } catch (e) {
      // saving error
    }
  }

  const chooseFlexDirection = (state) => {
    saveFlexDirection(state)
    setSettings({ ...settings, flexDirection: state })
  }

  const chooseJustifyContent = (state) => {
    saveJustifyContent(state)
    setSettings({ ...settings, justifyContent: state })
  }

  const chooseAlignContent = (state) => {
    saveAlignContent(state)
    setSettings({ ...settings, alignContent: state })
  }

  const chooseAlignItems = (state) => {
    saveAlignItems(state)
    setSettings({ ...settings, alignItems: state })
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
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      <ScrollView>
      <View style={{display: 'flex', alignItems: 'center', width: '100%', 
      marginTop: 20}}>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>flex-direction:</Text>
        <PropertyPicker properties={flexDirectionValues} selectedProperty={settings.flexDirection}
        onValueChange={(itemValue, _) => {
          chooseFlexDirection(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>justify-content:</Text>
        <PropertyPicker properties={justifyContentValues} selectedProperty={settings.justifyContent}
        onValueChange={(itemValue, _) => {
          chooseJustifyContent(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>align-content:</Text>
        <PropertyPicker properties={alignContentValues} selectedProperty={settings.alignContent}
        onValueChange={(itemValue, _) => {
          chooseAlignContent(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>align-items:</Text>
          <PropertyPicker properties={alignItemsValues} selectedProperty={settings.alignItems}
        onValueChange={(itemValue, _) => {
          chooseAlignItems(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default ChangeFlexContainerScreen