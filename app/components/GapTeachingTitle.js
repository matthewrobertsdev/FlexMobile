import React from 'react';

import {
  useColorScheme
} from 'react-native';

import TeachingTitle from './TeachingTitle'


function GapTeachingTitle(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TeachingTitle style={{ display: "flex", alignItmes: "center", width: "100%" }}
      color={isDarkMode ? 'rgb(0, 142, 0)' : 'rgb(2, 117, 1)'}>
      {props.children}
    </TeachingTitle>
  );
}

export default GapTeachingTitle