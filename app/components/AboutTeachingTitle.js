import React from 'react';

import {
  useColorScheme
} from 'react-native';

import TeachingTitle from './TeachingTitle'


function AboutTeachingTitle(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TeachingTitle style={{ display: "flex", alignItmes: "center", width: "100%" }}
      color={isDarkMode ? 'rgb(230, 136, 0)' : 'rgb(230, 136, 0)'}>
      {props.children}
    </TeachingTitle>
  );
}

export default AboutTeachingTitle