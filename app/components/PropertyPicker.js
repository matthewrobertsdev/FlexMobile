import React from 'react';
import {Platform, useColorScheme } from 'react-native'
import {Picker, PickerIOS} from '@react-native-picker/picker';

export default function PropertyPicker({properties, selectedProperty, onValueChange, itemStyle}) {
  const isDarkMode = useColorScheme() === 'dark';

  if (Platform.OS==='ios') {
  return (
        <PickerIOS style={{width: 210}} itemStyle={itemStyle} selectedValue={selectedProperty}
        onValueChange={onValueChange}>
          {properties.map((property)=>{
            return <PickerIOS.Item color={isDarkMode ? 'white': 'black'} label={property.toString()} value={property} key={property}/>
          })}
        </PickerIOS>
  )
  } else {
    return (
      <Picker style={{width: 250}} selectedValue={selectedProperty}
      onValueChange={onValueChange} color = {isDarkMode ? 'white': 'black'}>
        {properties.map((property)=>{
            return <Picker.Item label={property.toString()} value={property} key={property} style={{fontSize: 25}}/>
          })}
      </Picker>
)
  }
}