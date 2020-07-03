import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Welcome(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>

      <Button
        onPress={() => props.navigation.navigate('Login')}
        title="Go to Login"
      />
    </View>
  );
}
