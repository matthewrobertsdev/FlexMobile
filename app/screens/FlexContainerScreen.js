/**
 * Learn Flex
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Platform,
  ActivityIndicator
} from 'react-native';

import { SettingsContext } from '../App';
import ButtonWithMargin from '../components/ButtonWithMargin';
import SpacerView from '../components/SpacerView';
import loadSettings from '../utilities/loadSettings'
import { styles } from '../styles/Styles';

let nums = ['1', '2abc', '3\nh', '4', '5\ni', '6def', '7']

const FlexContainerScreen = ({ navigation }) => {
  const [loaded, setLoaded] = useState(false)
  const [settings, setSettings] = useContext(SettingsContext);

  //'rgb(242, 173, 8)' : 'rgb(255, 192, 0)',

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    if (settings === undefined) {
      loadSettings().then(savedState => {
        setSettings(savedState)
        setLoaded(true)
      })
    } else {
      setLoaded(true)
    }
  }, [loaded, settings]);
  if (settings === undefined) {
    return (
      <View style={styles.containerView}>
        <ActivityIndicator size="large" />
      </View>
    )
  } else {
    return (
      <>
        <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        <SafeAreaView edges={["left", "right"]}>
        <ScrollView>
          <View style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%',
            marginTop: 20
          }}>
            <ButtonWithMargin text='About Flexbox Containers' color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(53,139,255)' : 'blue') : 'blue'}
              onPress={() => { navigation.navigate('About Flex Containers') }} />
            <ButtonWithMargin text='Change Flex Container Values' color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(53,139,255)' : 'blue') : 'blue'}
              onPress={() => { navigation.navigate('Flex Container Values') }} />
            <View style={{
              display: 'flex', alignItems: 'center', width: '100%',
              marginTop: 15
            }}>
              <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center', marginHorizontal: 10}}>
                With "wrap" assigned and defined width and height:
              </Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.containerView}>
                <View style={{
                  display: 'flex', width: 300, height: 300, flexWrap: 'wrap', flexDirection: settings.flexDirection,
                  justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
                  backgroundColor: isDarkMode ? 'rgb(255, 120, 0)' : 'rgb(255, 120, 0)', borderRadius: 20
                }}>
                  {nums.map((value, index) => {
                    return <View style={{
                      padding: 10,
                      backgroundColor: isDarkMode ? 'blue' : 'blue'/*'rgb(96, 31, 159)' : 'rgb(183,84,233)'*/, borderRadius: 10,
                      justifyContent: 'center', alignItems: 'center', margin: 5
                    }} key={index}>
                      <Text style={{ color: isDarkMode ? 'white' : 'white', fontSize: 20 }}>
                        {value}
                      </Text>
                    </View>
                  })}
                </View>
              </View>
            </ScrollView>
            <View style={styles.containerView}>
              <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center', marginHorizontal: 10}}>
                With "nowrap" assigned and no width and no height defined:
              </Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.containerView}>
                <View style={{
                  display: 'flex', flexWrap: 'nowrap', flexDirection: settings.flexDirection,
                  justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
                  backgroundColor: isDarkMode ? 'rgb(255, 120, 0)' : 'rgb(255, 120, 0)',
                  borderRadius: 20
                }}>
                  {nums.map((value, index) => {
                    return <View style={{
                      padding: 10,
                      backgroundColor: isDarkMode ? 'blue' : 'blue'/*'rgb(96, 31, 159)' : 'rgb(183,84,233)'*/, borderRadius: 10,
                      justifyContent: 'center', alignItems: 'center', margin: 5
                    }} key={index}>
                      <Text style={{ color: isDarkMode ? 'white' : 'white', fontSize: 20 }}>
                        {value}
                      </Text>
                    </View>
                  })}
                </View>
              </View>
            </ScrollView>
            <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center', 
            marginHorizontal: 10, marginTop: 20, marginBottom: 10}}>
                With "wrap-reverse" assigned and defined width and height:
              </Text>
            <ScrollView horizontal={true}>
              <View style={styles.containerView}>
                <View style={{
                  display: 'flex', width: 300, height: 300, flexWrap: 'wrap-reverse', flexDirection: settings.flexDirection,
                  justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
                  backgroundColor: isDarkMode ? 'rgb(255, 120, 0)' : 'rgb(255, 120, 0)', borderRadius: 20
                }}>
                  {nums.map((value, index) => {
                    return <View style={{
                      padding: 10,
                      backgroundColor: isDarkMode ? 'blue' : 'blue'/*'rgb(96, 31, 159)' : 'rgb(183,84,233)'*/, borderRadius: 10,
                      justifyContent: 'center', alignItems: 'center', margin: 5
                    }} key={index}>
                      <Text style={{ color: isDarkMode ? 'white' : 'white', fontSize: 20 }}>
                        {value}
                      </Text>
                    </View>
                  })}
                </View>
              </View>
            </ScrollView>
            <SpacerView />
          </View>
        </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

export default FlexContainerScreen;
