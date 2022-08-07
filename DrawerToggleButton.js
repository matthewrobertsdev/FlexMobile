import React from 'react';
import {Platform, useColorScheme} from 'react-native';
//icon import
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerToggleButton = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
      <Ionicons
        style={{paddingLeft: 10, paddingRight: 10, marginRight: 7.5}}
        name={'menu-outline'}
        size={27.5}
        color={isDarkMode ? 'white' : (Platform.OS === 'ios' ? 'white' : 'black')}
        onPress={() => {
          navigation.toggleDrawer();
        }}
        accessibilityLabel={'Open Navigation Drawer Button'}
        accessibilityHint={'Double tap to open the navigation drawer'}
      />
    );
};

export default DrawerToggleButton;
