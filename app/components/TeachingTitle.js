import React from 'react';

import {
  Text,
  View
} from 'react-native';

function TeachingTitle(props) {
  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 25, color: props.color}}>{props.children}</Text>
    </View>
  );
}

export default TeachingTitle