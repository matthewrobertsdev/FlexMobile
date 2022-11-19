import React from 'react';

import {
  View,
  Button,
} from 'react-native';

function ButtonWithMargin(props) {
  return (
    <View style={{margin: 5}}>
      <Button title={props.text} onPress={props.onPress} color={props.color}/>
    </View>
  );
}

export default ButtonWithMargin