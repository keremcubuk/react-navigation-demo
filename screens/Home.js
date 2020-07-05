import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <Button
        onPress={() => {}}
        title="Go to About"
      />
    </View>
  );
}
