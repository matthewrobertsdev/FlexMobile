import React from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  Text,
  useColorScheme,
  Image
} from 'react-native';

import ButtonWithMargin from './components/ButtonWithMargin'
import openUrl from './utilities/openUrl'

import {styles} from './Styles'

function AboutScreen() {
  const versionNumString = '1'
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? 'white' : 'black'
  const buttonColor = isDarkMode ? 'rgb(255,52,52)' : 'rgb(255,59,48)'

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ScrollView>
        <View style={styles.containerView}>
          <Image style={styles.aboutScreenIcon}
            source={require('./resources/Icon.png')}
            accessibilityLabel="Learn Flex icon" />
          <Text style={{...styles.aboutScreenText, color: textColor }}>
            Learn Flex
          </Text>
          <Text style={{...styles.aboutScreenText, color: textColor }}>
            Version 1.0 ({versionNumString})
          </Text>
          <Text style={{...styles.aboutScreenText, color: textColor }}>
            {'Copyright © 2022 Matt Roberts.  \nAll rights reserved.'}
          </Text>
          <ButtonWithMargin text='Frequently Asked Questions' onPress={
            () => {
              openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/faq')
            }
          } color={buttonColor} />
          <ButtonWithMargin text='Home Page' onPress={
            () => {
              openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/')
            }
          } color={buttonColor} />
          <ButtonWithMargin text='Contact the Developer' onPress={
            () => {
              openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/contact')
            }
          } color={buttonColor} />
          <ButtonWithMargin text='Privacy Policy' onPress={
            () => {
              openUrl('https://matthewrobertsdev.github.io/celeritasapps/#/privacy')
            }
          } color={buttonColor} />
        </View>
      </ScrollView>
    </>
  )
};

export default AboutScreen;
