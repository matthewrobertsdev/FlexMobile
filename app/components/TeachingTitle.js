import React from 'react';

import {
  Text,
  View
} from 'react-native';

function TeachingTitle(props) {
  return (
    <View backgroundColor={props.backgroundColor} style={{ padding: 10, borderRadius: 20, 
    margin: 30 }}>
      <Text style={{ fontSize: 25, color: 'white' }}>{props.children}</Text>
    </View>
  );
}

export default TeachingTitle