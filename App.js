// In App.js in a new project

import * as React from 'react';
import { Dimensions, View, Text } from 'react-native';

function App() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        padding: 30,
      }}>
      <Text style={{ fontSize: 30, textAlign: 'center', color: '#00d2d3' }}>
        Mobile Navigation from Zero to Hero
      </Text>
    </View>
  );
}

export default App;
