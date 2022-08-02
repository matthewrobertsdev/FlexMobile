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
import { SettingsContext } from './RootStackScreen';
import { useHeaderHeight } from '@react-navigation/elements';

const flexDirectionValues=['row', 'column', 'row-reverse', 'column-reverse']
const justifyContentValues=['flex-start', 'flex-end', 'center', 'space-between',
'space-around', 'space-evenly']
const alignContentValues=['flex-start', 'flex-end', 'center', 'stretch',
'space-between', 'space-around']
const alignItemsValues=['flex-start', 'flex-end', 'center', 'stretch',
'baseline']

const FlexPropertiesScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [settings, setSettings] = useContext(SettingsContext);
  const [flexDirection, setFlexDirection]=useState(settings.flexDirection)
  const [justifyContent, setJustifyContent]=useState(settings.justifyContent)
  const [alignContent, setAlignContent]=useState(settings.alignContent)
  const [alignItems, setAlignItems]=useState(settings.alignItems)
  const headerHeight = useHeaderHeight();

  let scrollViewTopMargin = 0

  if (Platform.OS === 'ios') {
    scrollViewTopMargin = headerHeight
  }
  useEffect(() => {
    if (Platform.OS === 'android') {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: false,
        headerStyle: { backgroundColor: 'rgb(255,59,48)' },
        title: "Flex Values"
      })
     }
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="rgb(255,59,48)"/>
      <ScrollView>
      <View style={{display: 'flex', alignItems: 'center', width: '100%', 
      marginTop: scrollViewTopMargin+20}}>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>flex-direction:</Text>
        <PropertyPicker properties={flexDirectionValues} selectedProperty={flexDirection}
        onValueChange={(itemValue, _) => {
          setFlexDirection(itemValue)
          setSettings({...settings, flexDirection: itemValue})
          }} itemStyle={{color: 'rgb(255,59,48)'}}/>
        <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>justify-content:</Text>
        <PropertyPicker properties={justifyContentValues} selectedProperty={justifyContent}
        onValueChange={(itemValue, _) => {
          setJustifyContent(itemValue)
          setSettings({...settings, justifyContent: itemValue})
          }} itemStyle={{color: 'rgb(255,59,48)'}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>align-content:</Text>
        <PropertyPicker properties={alignContentValues} selectedProperty={alignContent}
        onValueChange={(itemValue, _) => {
          setAlignContent(itemValue)
          setSettings({...settings, alignContent: itemValue})
          }} itemStyle={{color: 'rgb(255,59,48)'}}/>
          <Text style={{fontSize: 25, color: isDarkMode ? 'white' : 'black'}}>align-items:</Text>
          <PropertyPicker properties={alignItemsValues} selectedProperty={alignItems}
        onValueChange={(itemValue, _) => {
          setAlignItems(itemValue)
          setSettings({...settings, alignItems: itemValue})
          }} itemStyle={{color: 'rgb(255,59,48)'}}/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default FlexPropertiesScreen