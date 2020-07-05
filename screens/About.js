import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function About(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>

      <Button
        onPress={() => props.navigation.navigate('Help')}
        title="Go to Help"
      />
      <Button
        onPress={() => {}}
        title="Back to Home"
      />
    </View>
  );
}
