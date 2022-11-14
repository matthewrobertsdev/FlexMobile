import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerToggleButton = ({navigation}) => {
    return (
      <Ionicons
        style={{paddingLeft: 10, paddingRight: 10, marginRight: 7.5}}
        name={'menu-outline'}
        size={27.5}
        color={'white'}
        onPress={() => {
          navigation.toggleDrawer();
        }}
        accessibilityLabel={'Open Navigation Drawer Button'}
        accessibilityHint={'Tap or click to open the navigation drawer'}
      />
    );
};

export default DrawerToggleButton;
