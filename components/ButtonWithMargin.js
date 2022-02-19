import React from 'react';

import {
  View,
  Button,
} from 'react-native';

function ButtonWithMargin(props) {
  return (
    <View style={{margin: 10}}>
      <Button title={props.text} onPress={props.onPress} color='red'/>
    </View>
  );
}

export default ButtonWithMargin