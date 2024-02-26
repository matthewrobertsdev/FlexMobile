import React from 'react';

import {
  useColorScheme
} from 'react-native';

import TeachingTitle from './TeachingTitle'


function AboutTeachingTitle(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TeachingTitle style={{ display: "flex", alignItmes: "center", width: "100%" }}
      color={isDarkMode ? 'rgb(255, 115, 23)' : 'rgb(204, 54, 0)'/*'rgb(232, 111, 23)' : 'rgb(232, 111, 23)'*/}>
      {props.children}
    </TeachingTitle>
  );
}

export default AboutTeachingTitle