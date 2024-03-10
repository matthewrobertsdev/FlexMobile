import React from 'react';

import {
  useColorScheme,
  Platform
} from 'react-native';

import TeachingTitle from './TeachingTitle'


function ContainerTeachingTitle(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TeachingTitle style={{ display: "flex", alignItmes: "center", width: "100%" }}
      color={isDarkMode ? (Platform.OS === 'ios' ? 'rgb(97, 97, 255)' : 'rgb(54, 0, 208)') : 'rgb(54, 0, 208)'/*isDarkMode ? 'rgb(40, 130, 255)' : "blue"*/}>
      {props.children}
    </TeachingTitle>
  );
}

export default ContainerTeachingTitle