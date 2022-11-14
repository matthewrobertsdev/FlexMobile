import React, { useContext } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  useColorScheme,
  Button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropertyPicker from './PropertyPicker'
import { SettingsContext } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './Styles'

const flexBasisValues = ['auto', 50, 100, 150, 200, 250, 300, 350]
const flexGrowValues = [0, 1, 2, 3, 4, 5]
const flexShrinkValues = [0, 1, 2, 3, 4, 5]
const alignSelfValues = ['auto', 'flex-start', 'flex-end', 'center', 'stretch',
  'baseline']

const jsonArray = [
  { title: 'item 1: flex-basis', key: 'flexBasisFor1', values: flexBasisValues },
  { title: 'item 2abc: flex-basis', key: 'flexBasisFor2abc', values: flexBasisValues },
  { title: 'item 3h: flex-basis', key: 'flexBasisFor3h', values: flexBasisValues },
  { title: 'item 1: flex-grow', key: 'flexGrowFor1', values: flexGrowValues },
  { title: 'item 2abc: flex-grow', key: 'flexGrowFor2abc', values: flexGrowValues },
  { title: 'item 3h: flex-grow', key: 'flexGrowFor3h', values: flexGrowValues },
  { title: 'item 1: flex-shrink', key: 'flexShrinkFor1', values: flexShrinkValues },
  { title: 'item 2abc: flex-shrink', key: 'flexShrinkFor2abc', values: flexShrinkValues },
  { title: 'item 3h: flex-shrink', key: 'flexShrinkFor3h', values: flexShrinkValues },
  { title: 'item 1: align-self', key: 'alignSelfFor1', values: alignSelfValues },
  { title: 'item 2abc: align-self', key: 'alignSelfFor2abc', values: alignSelfValues },
  { title: 'item 3h: align-self', key: 'alignSelfFor3h', values: alignSelfValues },
]

const ChangeFlexItemsScreen = ({ navigation }) => {
  const [settings, setSettings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';

  const saveKeyValuePair = async (key, state) => {
    try {
      const jsonString = JSON.stringify(state)
      await AsyncStorage.setItem(key, jsonString)
    } catch (e) {
      // saving error
    }
  }

  const textColor = 'rgb(136, 64, 255)'

  if (Platform.OS === 'ios') {
    return (
      <>
        <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
          <ScrollView>
            <View style={{ height: 40 }}></View>
            {jsonArray.map((json, index) => <Button title={`Change ${json.title}`} key={index}
              onPress={() => {
                navigation.navigate('Change Item Value',
                  { title: json.title, key: json.key, values: json.values })
              }} color={textColor} />)}
          </ScrollView>
        </SafeAreaView>
      </>
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
                    saveKeyValuePair(json.key, itemValue)
                  }} itemStyle={{ color: isDarkMode ? 'white' : 'black' }} />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
export default ChangeFlexItemsScreen