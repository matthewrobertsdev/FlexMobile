import React, {useState, useContext, useEffect} from 'react';
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


const flexBasisValues=['auto', 50, 100, 150, 200, 250, 300, 350]

const flexGrowValues=[0, 1, 2, 3, 4, 5]

const flexShrinkValues=[0, 1, 2, 3, 4, 5]

const alignSelfValues = ['auto', 'flex-start', 'flex-end', 'center', 'stretch',
'baseline']

const ChangeFlexItemsScreen = ({navigation}) => {
  const [settings, setSettings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';
  const headerHeight = useHeaderHeight();

  const saveKeyValuePair = async (key, state) => {
    try {
      const jsonString = JSON.stringify(state)
      await AsyncStorage.setItem(key, jsonString)
    } catch (e) {
      // saving error
    }
  }

  const chooseFlexBasisFor1 = (state) => {
    saveKeyValuePair('flexBasisFor1', state)
    setSettings({ ...settings, flexBasisFor1: state })
  }

  const chooseFlexBasisFor2abc = (state) => {
    saveKeyValuePair('flexBasisFor2abc', state)
    setSettings({ ...settings, flexBasisFor2abc: state })
  }

  const chooseFlexBasisFor3h = (state) => {
    saveKeyValuePair('flexBasisFor3h', state)
    setSettings({ ...settings, flexBasisFor3h: state })
  }

  const chooseFlexGrowFor1 = (state) => {
    saveKeyValuePair('flexGrowFor1', state)
    setSettings({ ...settings, flexGrowFor1: state })
  }

  const chooseFlexGrowFor2abc = (state) => {
    saveKeyValuePair('flexGrowFor2abc', state)
    setSettings({ ...settings, flexGrowFor2abc: state })
  }

  const chooseFlexGrowFor3h = (state) => {
    saveKeyValuePair('flexGrowFor3h', state)
    setSettings({ ...settings, flexGrowFor3h: state })
  }

  const chooseFlexShrinkFor1 = (state) => {
    saveKeyValuePair('flexShrinkFor1', state)
    setSettings({ ...settings, flexShrinkFor1: state })
  }

  const chooseFlexShrinkFor2abc = (state) => {
    saveKeyValuePair('flexShrinkFor2abc', state)
    setSettings({ ...settings, flexShrinkFor2abc: state })
  }

  const chooseFlexShrinkFor3h = (state) => {
    saveKeyValuePair('flexShrinkFor3h', state)
    setSettings({ ...settings, flexShrinkFor3h: state })
  }

  const chooseAlignSelfFor1 = (state) => {
    saveKeyValuePair('alignSelfFor1', state)
    setSettings({ ...settings, alignSelfFor1: state })
  }

  const chooseAlignSelfFor2abc = (state) => {
    saveKeyValuePair('alignSelfFor2abc', state)
    setSettings({ ...settings, alignSelfFor2abc: state })
  }

  const chooseAlignSelfFor3h = (state) => {
    saveKeyValuePair('alignSelfFor3h', state)
    setSettings({ ...settings, alignSelfFor3h: state })
  }

  const pickerForegroundColor = 'rgb(136, 64, 255)'

  if (Platform.OS === 'ios') {
    scrollViewTopMargin = headerHeight
  }
  useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: false,
        headerStyle: { backgroundColor: 'rgb(93, 0, 255)' },
        title: "Flex Container Values",
      })
     }
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      <ScrollView>
      <View style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>1: flex-basis</Text>
        <PropertyPicker properties={flexBasisValues} selectedProperty={settings.flexBasisFor1}
        onValueChange={(itemValue, _) => {
          chooseFlexBasisFor1(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>2abc: flex-basis</Text>
        <PropertyPicker properties={flexBasisValues} selectedProperty={settings.flexBasisFor2abc}
        onValueChange={(itemValue, _) => {
          chooseFlexBasisFor2abc(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>3h: flex-basis</Text>
        <PropertyPicker properties={flexBasisValues} selectedProperty={settings.flexBasisFor3h}
        onValueChange={(itemValue, _) => {
          chooseFlexBasisFor3h(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>1: flex-grow</Text>
        <PropertyPicker properties={flexGrowValues} selectedProperty={settings.flexGrowFor1}
        onValueChange={(itemValue, _) => {
          chooseFlexGrowFor1(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>2abc: flex-grow</Text>
        <PropertyPicker properties={flexGrowValues} selectedProperty={settings.flexGrowFor2abc}
        onValueChange={(itemValue, _) => {
          chooseFlexGrowFor2abc(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>3h: flex-grow</Text>
        <PropertyPicker properties={flexGrowValues} selectedProperty={settings.flexGrowFor3h}
        onValueChange={(itemValue, _) => {
          chooseFlexGrowFor3h(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>1: flex-shrink</Text>
           <PropertyPicker properties={flexShrinkValues} selectedProperty={settings.flexShrinkFor1}
        onValueChange={(itemValue, _) => {
          chooseFlexShrinkFor1(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>2abc: flex-shrink</Text>
        <PropertyPicker properties={flexShrinkValues} selectedProperty={settings.flexShrinkFor2abc}
        onValueChange={(itemValue, _) => {
          chooseFlexShrinkFor2abc(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>3h: flex-shrink</Text>
        <PropertyPicker properties={flexShrinkValues} selectedProperty={settings.flexShrinkFor3h}
        onValueChange={(itemValue, _) => {
          chooseFlexShrinkFor3h(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>1: align-self</Text>
           <PropertyPicker properties={alignSelfValues} selectedProperty={settings.alignSelfFor1}
        onValueChange={(itemValue, _) => {
          chooseAlignSelfFor1(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>2abc: align-self</Text>
        <PropertyPicker properties={alignSelfValues} selectedProperty={settings.alignSelfFor2abc}
        onValueChange={(itemValue, _) => {
          chooseAlignSelfFor2abc(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>3h: align-self</Text>
        <PropertyPicker properties={alignSelfValues} selectedProperty={settings.alignSelfFor3h}
        onValueChange={(itemValue, _) => {
          chooseAlignSelfFor3h(itemValue)
          }} itemStyle={{color: pickerForegroundColor}}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default ChangeFlexItemsScreen