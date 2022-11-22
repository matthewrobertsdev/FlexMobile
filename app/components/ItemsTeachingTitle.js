import React from 'react';

import {
  useColorScheme
} from 'react-native';

import TeachingTitle from './TeachingTitle'


function ItemsTeachingTitle(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TeachingTitle style={{ display: "flex", alignItmes: "center", width: "100%" }}
      color={isDarkMode ? 'rgb(148, 84, 255)' : 'rgb(93, 0, 255)'}>
      {props.children}
    </TeachingTitle>
  );
}

export default ItemsTeachingTitle