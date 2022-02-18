/**
 * Learn Flex
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { SettingsContext } from './RootStackScreen';

let nums = ['1', '2abc', '3\nh', '4', '5\ni', '6def', '7']

const MainScreen = ({ navigation }) => {
  const [settings, setSettings] = useContext(SettingsContext);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
          marginTop: 20
        }}>
          <View style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Button title='Change Flex Values' color='red'
            onPress={() => { navigation.navigate('Flex Values') }} />
          </View>
          <View style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 20 }}>
            <Button title='About Flexbox' color='red'/>
          </View>
          <View style={{
            display: 'flex', alignItems: 'center', width: '100%',
            marginTop: 20
          }}>
            <Button title='About Learn Flex' color='red'/>
          </View>
          <View style={{
            display: 'flex', alignItems: 'center', width: '100%',
            marginTop: 20
          }}>
            <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center' }}>
              With "wrap" assigned and defined width and height:
            </Text>
          </View>
          <ScrollView horizontal={true}>
          <View style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', marginTop: 20 }}>
            <View style={{
              display: 'flex', width: 300, height: 300, flexWrap: 'wrap', flexDirection: settings.flexDirection,
              justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
              backgroundColor: isDarkMode ? 'rgb(50,50,50)' : 'gray',
              borderRadius: 20
            }}>
              {nums.map((value, index) => {
                return <View style={{
                  padding: 10,
                  backgroundColor: isDarkMode ? 'rgb(207,0,30)' : 'rgb(255,59,48)'/*'rgb(96, 31, 159)' : 'rgb(183,84,233)'*/, borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5
                }} key={value}>
                  <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 20 }}>
                    {value}
                  </Text>
                </View>
              })}
            </View>
          </View>
          </ScrollView>
          <View style={{
            display: 'flex', alignItems: 'center', width: '100%',
            marginTop: 20
          }}>
            <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center'}}>
              With "nowrap" assigned and no width and no height defined:
            </Text>
          </View>
          <ScrollView horizontal={true}>
          <View style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', marginTop: 20 }}>
            <View style={{
              display: 'flex', flexWrap: 'nowrap', flexDirection: settings.flexDirection,
              justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
              backgroundColor: isDarkMode ? 'rgb(50,50,50)' : 'gray',
              borderRadius: 20
            }}>
              {nums.map((value, index) => {
                return <View style={{
                  padding: 10,
                  backgroundColor: isDarkMode ? 'rgb(207,0,30)' : 'rgb(255,59,48)'/*'rgb(96, 31, 159)' : 'rgb(183,84,233)'*/, borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5
                }} key={value}>
                  <Text style={{ color: isDarkMode ? 'white' : 'black', fontSize: 20 }}>
                    {value}
                  </Text>
                </View>
              })}
            </View>
          </View>
          </ScrollView>
          <View style={{height: 40}}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
