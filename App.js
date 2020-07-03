// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthContext } from './components/context';
import HomeScreen from './screens/Home';
import About from './screens/About';
import Help from './screens/Help';
import Settings from './screens/Settings';
import Password from './screens/Password';
import Notifications from './screens/Notifications';
import Login from './screens/Login';
import Welcome from './screens/Welcome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Password" component={Password} />
    </Stack.Navigator>
  );
}

function LoginStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function AfterLogin() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

function App() {
  const [userToken, setUsertoken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUsertoken('asf15125125');
    },
    signOut: () => {
      setUsertoken(null);
    },
  }));

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {!userToken ? <LoginStackNavigator /> : <AfterLogin />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
