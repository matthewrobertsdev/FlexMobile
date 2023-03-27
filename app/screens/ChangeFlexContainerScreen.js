import React, {useContext} from 'react';
import {
  Platform,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
  Text
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SettingsContext } from '../App';
import ButtonWithMargin from '../components/ButtonWithMargin';

import {styles} from '../styles/Styles'


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
  const [settings] = useContext(SettingsContext);
  const isDarkMode = useColorScheme() === 'dark';

  const textColor = isDarkMode ? (Platform.OS === 'ios' ? 'rgb(53,139,255)' : 'blue') : 'blue'

    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
        <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
          <ScrollView>
            <View style={styles.containerView}>
            {jsonArray.map((json, index) => <View  key={index}>
              <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center', marginHorizontal: 10}}>
                {json.title}: {settings[json.key]}
              </Text>
              <ButtonWithMargin text={`Change ${json.title}`}
              onPress={() => {
                navigation.navigate('Change Container Value',
                  { title: json.title, key: json.key, values: json.values })
              }} color={textColor} />
              </View>)}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
}
export default ChangeFlexContainerScreen