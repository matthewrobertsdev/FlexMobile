import React, { useContext } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import SpacerView from './components/SpacerView';
import {styles} from './Styles'


const flexDirectionValues = ['row', 'column', 'row-reverse', 'column-reverse']
const justifyContentValues = ['flex-start', 'flex-end', 'center', 'space-between',
  'space-around', 'space-evenly']
const alignContentValues = ['flex-start', 'flex-end', 'center', 'stretch',
  'space-between', 'space-around']
const alignItemsValues = ['flex-start', 'flex-end', 'center', 'stretch',
  'baseline']

const jsonArray = [
  { title: 'flex-direction', key: 'flexDirection', values: flexDirectionValues },
  { title: 'justify-content', key: 'justifyContent', values: justifyContentValues },
  { title: 'align-content', key: 'alignContent', values: alignContentValues },
  { title: 'align-items', key: 'alignItems', values: alignItemsValues }
]
const ChangeFlexContainerScreen = ({ navigation }) => {
  const [settings, setSettings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';

  const saveValueWithKey = (key, value) => {
    try {
      const jsonData = JSON.stringify(value)
      AsyncStorage.setItem(key, jsonData)
      setSettings({ ...settings, [key]: value })
    } catch (e) {
      console.log(e)
      // saving error
    }
  }

  const textColor = 'rgb(40, 130, 255)'

  if (Platform.OS === 'ios') {
    return (
      <ScrollView>
        <SpacerView/>
        {jsonArray.map((json, index) => <Button title={`Change ${json.title}`} key={index}
          onPress={() => {
            navigation.navigate('Change Container Value',
              { title: json.title, key: json.key, values: json.values })
          }} />)}
      </ScrollView>
    )
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        <ScrollView>
          <View style={styles.containerView}>
            {jsonArray.map((json, index) =>
              <View key={index} style={styles.pickerWithTitleView}>
                <Text style={{ fontSize: 25, color: textColor }}>{json.title}</Text>
                <PropertyPicker properties={json.values} selectedProperty={settings[json.key]}
                  onValueChange={(itemValue, _) => {
                    saveValueWithKey(json.key, itemValue)
                  }} itemStyle={{ color: isDarkMode ? 'white' : 'black' }} />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
export default ChangeFlexContainerScreen