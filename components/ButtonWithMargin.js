import React from 'react';

import {
  View,
  Button,
} from 'react-native';

function ButtonWithMargin(props) {
  return (
    <View style={{margin: 5}}>
      <Button title={props.text} onPress={props.onPress} color='rgb(255,59,48)'/>
    </View>
  );
}

export default ButtonWithMargin