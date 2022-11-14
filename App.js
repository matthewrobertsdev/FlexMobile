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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : DefaultTheme
  const [settings, setSettings] = useState(undefined)
  return (
    <NavigationContainer theme={theme} children={null}>
      <SettingsContext.Provider value={[settings, setSettings]}>
        <DrawerComponents />
      </SettingsContext.Provider>
    </NavigationContainer>
  );
}

export default App;

