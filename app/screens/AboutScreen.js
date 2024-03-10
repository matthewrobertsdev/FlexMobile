import React from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  useColorScheme,
  Image
} from 'react-native';

import ButtonWithMargin from '../components/ButtonWithMargin'
import openUrl from '../utilities/openUrl'

import {styles} from '../styles/Styles'

function AboutScreen() {
  const versionString = '1.0'
  const versionNumString = '11'
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black'
  const buttonColor = isDarkMode ? (Platform.OS === 'ios' ? 'rgb(53,139,255)' : 'blue') : 'blue'//isDarkMode ? 'rgb(255,52,52)' : 'rgb(207,0,30)'

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ScrollView>
        <View style={styles.containerView}>
          <Image style={styles.aboutScreenIcon}
            source={require('../resources/Icon.png')}
            accessibilityLabel="Learn Flex icon" />
          <Text style={{...styles.aboutScreenText, color: textColor }}>
            Learn Flex
          </Text>
          <Text style={{...styles.aboutScreenText, color: textColor }}>
            Version {versionString} ({versionNumString})
          </Text>
          <Text style={{...styles.aboutScreenText, color: textColor }}>
            {'Copyright © 2022-2024 Matt Roberts.  \nAll rights reserved.'}
          </Text>
          <ButtonWithMargin text='Frequently Asked Questions' onPress={
            () => {
              openUrl('https://matthewrobertsdev.github.io/celeritasappshomepage/faq/learnflex')
            }
          } color={buttonColor} />
          <ButtonWithMargin text='Home Page' onPress={
            () => {
              openUrl('https://matthewrobertsdev.github.io/celeritasappshomepage')
            }
          } color={buttonColor} />
          <ButtonWithMargin text='Contact the Developer' onPress={
            () => {
              openUrl('https://matthewrobertsdev.github.io/celeritasappshomepage/contact')
            }
          } color={buttonColor} />
          <ButtonWithMargin text='Privacy Policy' onPress={
            () => {
              openUrl('https://matthewrobertsdev.github.io/celeritasappshomepage/privacy/learnflex')
            }
          } color={buttonColor} />
        </View>
      </ScrollView>
    </>
  )
};

export default AboutScreen;
