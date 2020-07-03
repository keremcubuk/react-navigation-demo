import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../components/context';

export default function Settings(props) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Password Screen</Text>

      <Button
        onPress={() => props.navigation.navigate('Password')}
        title="Go to Password"
      />
      <Button onPress={() => signOut()} title="SignOut" />
    </View>
  );
}
