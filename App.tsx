/**
 * Learn Flex App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import { useColorScheme } from 'react-native';
 
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 
 import DrawerComponents from './DrawerComponents'

 export const SettingsContext = React.createContext();

 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const theme = isDarkMode ? DarkTheme : DefaultTheme
   const [settings, setSettings]=useState({justifyContent: 'flex-start', alignContent: 'flex-start', 
   flexDirection: 'row', alignItems: 'flex-start', rowGap: 0, flexBasisFor1: 'auto', 
   flexBasisFor2abc: 'auto', flexBasisFor3h: 'auto', flexGrowFor1: 0, flexGrowFor2abc: 0, flexGrowFor3h: 0,
   flexShrinkFor1: 0, flexShrinkFor2abc: 0, flexShrinkFor3h: 0})
   return (
     <NavigationContainer theme={theme} children={null}>
      <SettingsContext.Provider value={[settings, setSettings]}>
       <DrawerComponents/>
      </SettingsContext.Provider>
     </NavigationContainer>
   );
 }
 
 export default App;
 
 