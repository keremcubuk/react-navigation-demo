import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Settings(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Password Screen</Text>

      <Button
        onPress={() => props.navigation.navigate('Password')}
        title="Go to Password"
      />
    </View>
  );
}
