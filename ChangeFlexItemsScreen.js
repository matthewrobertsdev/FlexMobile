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

const flexBasisValues=['auto', 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]

const flexGrowValues=[0, 1, 2, 3, 4, 5]

const flexShrinkValues=[0, 1, 2, 3, 4, 5]



const ChangeFlexItemsScreen = ({navigation}) => {
  const [settings, setSettings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';
  const [flexBasisFor1, setFlexBasisFor1]=useState(settings.flexBasisFor1)
  const [flexBasisFor2abc, setFlexBasisFor2abc]=useState(settings.flexBasisFor2abc)
  const [flexBasisFor3h, setFlexBasisFor3h]=useState(settings.flexBasisFor3h)
  const [flexGrowFor1, setFlexGrowFor1]=useState(settings.flexGrowFor1)
  const [flexGrowFor2abc, setFlexGrowFor2abc]=useState(settings.flexGrowFor2abc)
  const [flexGrowFor3h, setFlexGrowFor3h]=useState(settings.flexGrowFor3h)
  const [flexShrinkFor1, setFlexShrinkFor1]=useState(settings.flexShrinkFor1)
  const [flexShrinkFor2abc, setFlexShrinkFor2abc]=useState(settings.flexShrinkFor2abc)
  const [flexShrinkFor3h, setFlexShrinkFor3h]=useState(settings.flexShrinkFor3h)
  const headerHeight = useHeaderHeight();

  let scrollViewTopMargin = 0

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
      <StatusBar barStyle={'light-content'} backgroundColor={isDarkMode ? 'black' : 'white'}/>
      <ScrollView>
      <View style={{display: 'flex', alignItems: 'center', width: '100%'}}>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>1: flex-basis</Text>
        <PropertyPicker properties={flexBasisValues} selectedProperty={flexBasisFor1}
        onValueChange={(itemValue, _) => {
          setFlexBasisFor1(itemValue)
          setSettings({...settings, flexBasisFor1: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>2abc: flex-basis</Text>
        <PropertyPicker properties={flexBasisValues} selectedProperty={flexBasisFor2abc}
        onValueChange={(itemValue, _) => {
          setFlexBasisFor2abc(itemValue)
          setSettings({...settings, flexBasisFor2abc: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>3h: flex-basis</Text>
        <PropertyPicker properties={flexBasisValues} selectedProperty={flexBasisFor3h}
        onValueChange={(itemValue, _) => {
          setFlexBasisFor3h(itemValue)
          setSettings({...settings, flexBasisFor3h: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>1: flex-grow</Text>
        <PropertyPicker properties={flexGrowValues} selectedProperty={flexGrowFor1}
        onValueChange={(itemValue, _) => {
          setFlexGrowFor1(itemValue)
          setSettings({...settings, flexGrowFor1: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>2abc: flex-grow</Text>
        <PropertyPicker properties={flexGrowValues} selectedProperty={flexGrowFor2abc}
        onValueChange={(itemValue, _) => {
          setFlexGrowFor2abc(itemValue)
          setSettings({...settings, flexGrowFor2abc: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>3h: flex-grow</Text>
        <PropertyPicker properties={flexGrowValues} selectedProperty={flexGrowFor3h}
        onValueChange={(itemValue, _) => {
          setFlexGrowFor3h(itemValue)
          setSettings({...settings, flexGrowFor3h: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>1: flex-shrink</Text>
           <PropertyPicker properties={flexShrinkValues} selectedProperty={flexShrinkFor1}
        onValueChange={(itemValue, _) => {
          setFlexShrinkFor1(itemValue)
          setSettings({...settings, flexShrinkFor1: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>2abc: flex-shrink</Text>
        <PropertyPicker properties={flexShrinkValues} selectedProperty={flexShrinkFor2abc}
        onValueChange={(itemValue, _) => {
          setFlexShrinkFor2abc(itemValue)
          setSettings({...settings, flexShrinkFor2abc: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>3h: flex-shrink</Text>
        <PropertyPicker properties={flexShrinkValues} selectedProperty={flexShrinkFor3h}
        onValueChange={(itemValue, _) => {
          setFlexShrinkFor3h(itemValue)
          setSettings({...settings, flexShrinkFor3h: itemValue})
          }} itemStyle={{color: pickerForegroundColor}}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default ChangeFlexItemsScreen