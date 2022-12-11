import React from 'react';

import {
  useColorScheme
} from 'react-native';

import TeachingTitle from './TeachingTitle'


function OrderTeachingTitle(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TeachingTitle style={{ display: "flex", alignItmes: "center", width: "100%" }}
      color={isDarkMode ? 'rgb(105, 106, 255)' : 'rgb(59, 59, 147)'}>
      {props.children}
    </TeachingTitle>
  );
}

export default OrderTeachingTitle