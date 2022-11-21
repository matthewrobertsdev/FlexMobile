import React from 'react';

import {
  useColorScheme
} from 'react-native';

import TeachingTitle from './TeachingTitle'


function ContainerTeachingTitle(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TeachingTitle style={{ display: "flex", alignItmes: "center", width: "100%" }}
      color={isDarkMode ? 'rgb(40, 130, 255)' : "blue"}>
      {props.children}
    </TeachingTitle>
  );
}

export default ContainerTeachingTitle