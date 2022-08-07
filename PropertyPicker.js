import React from 'react';
import {Platform, useColorScheme } from 'react-native'
import {Picker, PickerIOS} from '@react-native-picker/picker';

export default function PropertyPicker({properties, selectedProperty, onValueChange, itemStyle}) {
  const isDarkMode = useColorScheme() === 'dark';

  if (Platform.OS==='ios') {
  return (
        <PickerIOS style={{width: 210}} itemStyle={itemStyle} selectedValue={selectedProperty}
        onValueChange={onValueChange} itemStyle={itemStyle}>
          {properties.map((property)=>{
            return <PickerIOS.Item label={property} value={property} key={property}/>
          })}
        </PickerIOS>
  )
  } else {
    return (
      <Picker style={{width: 250}} selectedValue={selectedProperty}
      onValueChange={onValueChange}>
        {properties.map((property)=>{
            return <Picker.Item label={property} value={property} key={property} color={isDarkMode ? 'lightblue' : 'blue'} style={{fontSize: 25}}/>
          })}
      </Picker>
)
  }
}