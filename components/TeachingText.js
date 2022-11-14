import React from 'react';

import {
  Text,
  useColorScheme
} from 'react-native';

function TeachingText(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text style={{ fontSize: 20, color: isDarkMode ? 'white' : 'black', marginHorizontal: 10 }}>
      {props.children}
    </Text>
  );
}

export default TeachingText