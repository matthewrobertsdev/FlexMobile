 import React, {useEffect, useState, useContext} from 'react';
 import {
   StatusBar,
   Text,
   View,
   ScrollView,
   useColorScheme,
   ActivityIndicator,
   SafeAreaView
 } from 'react-native';
 import { SettingsContext } from '../App';

 import { useHeaderHeight } from '@react-navigation/elements';
 import loadSettings from '../utilities/loadSettings'
import { styles } from '../styles/Styles';
import ButtonWithMargin from '../components/ButtonWithMargin';
import SpacerView from '../components/SpacerView';
 
 function FlexItemsScreen({navigation}) {
   const isDarkMode = useColorScheme() === 'dark';
   const [settings, setSettings] = useContext(SettingsContext);
   const headerHeight = useHeaderHeight();
   const [loaded, setLoaded]=useState(false)

  if (Platform.OS === 'ios') {
    scrollViewTopMargin = headerHeight
  }
  useEffect(() => {
    //load settings if necessary
    if (settings === undefined) {
      loadSettings().then(savedState => {
        setSettings(savedState)
        setLoaded(true)
      })
    } else {
      setLoaded(true)
    }
  }, [settings]);
  if (settings === undefined) {
    <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
  } else {
   return (
     <>
       <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
       <SafeAreaView edgees={["left", "right"]}>
       <ScrollView>
         <View style={styles.containerView}>
            <ButtonWithMargin text='About Flexbox Items' 
            color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(148, 84, 255)' : 'rgb(93, 0, 255)') : 'rgb(93, 0, 255)'} 
            onPress={() => { navigation.navigate('Abouts Flex Items') }}/>
            <ButtonWithMargin text="Change Flex Items' Values" 
            color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(148, 84, 255)' : 'rgb(93, 0, 255)') : 'rgb(93, 0, 255)'}
            onPress={() => { navigation.navigate('Flex Items\' Values') }} />
          <View style={styles.containerView}>
            <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', textAlign: 'center', marginHorizontal: 10 }}>
              With "wrap" assigned and defined width and height, and the flex container properties applied:
            </Text>
          </View>
          <ScrollView horizontal={true}>
          <View style={styles.containerView}>
            <View style={{
              display: 'flex', width: 300, height: 300, flexWrap: 'wrap', flexDirection: settings.flexDirection,
              justifyContent: settings.justifyContent, alignContent: settings.alignContent, alignItems: settings.alignItems,
              backgroundColor: isDarkMode ? 'rgb(242, 173, 8)' : 'rgb(255, 192, 0)', borderRadius: 20
            }}>
                <View style={{
                  padding: 10,
                  backgroundColor: 'rgb(109, 0, 255)', borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5, flexGrow: 1, 
                  flexBasis: settings.flexBasisFor1, flexGrow: settings.flexGrowFor1,
                  flexShrink: settings.flexShrinkFor1, alignSelf: settings.alignSelfFor1
                }} key={'1'}>
                  <Text style={{ color: 'white', fontSize: 20 }}>
                    {'1'}
                  </Text>
                </View>
                <View style={{
                  padding: 10,
                  backgroundColor: 'rgb(109, 0, 255)', borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5, 
                  flexBasis: settings.flexBasisFor2abc, flexGrow: settings.flexGrowFor2abc,
                  flexShrink: settings.flexShrinkFor2abc, alignSelf: settings.alignSelfFor2abc
                }} key={'2abc'}>
                  <Text style={{ color: 'white', fontSize: 20 }}>
                    {'2abc'}
                  </Text>
                </View>
                <View style={{
                  padding: 10,
                  backgroundColor: 'rgb(109, 0, 255)', borderRadius: 10,
                  justifyContent: 'center', alignItems: 'center', margin: 5,
                  flexBasis: settings.flexBasisFor3h, flexGrow: settings.flexGrowFor3h,
                  flexShrink: settings.flexShrinkFor3h, alignSelf: settings.alignSelfFor3h
                }} key={'3\nh'}>
                  <Text style={{ color: 'white', fontSize: 20 }}>
                    {'3\nh'}
                  </Text>
                </View>
            </View>
          </View>
          </ScrollView>
          <SpacerView/>
         </View>
       </ScrollView>
       </SafeAreaView>
     </>
   )
        }
 };
 
 export default FlexItemsScreen;
 