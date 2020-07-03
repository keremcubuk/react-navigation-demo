import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../components/context';

export default function Login(props) {
  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>

      <Button onPress={() => signIn()} title="Go to After Login" />
    </View>
  );
}
