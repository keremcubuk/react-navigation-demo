# Mobile Navigation from Zero to Hero Demo

This project created for the developing react navigation demo project. With these project you will be hero on [React Navigation](https://reactnavigation.org/).

Before starting, run `npm i`, which will download the router package defined in `package.json`.

### Installing React Navigation

This packages have already defined in `package.json`file. Just run `npm install`.

```
package.json
├── @react-navigation/native
├── @react-navigation/bottom-tabs
├── @react-navigation/stack
```

## Step 1: Create Navigation Container

```js
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
    </NavigationContainer>
  );
}
```

## Step 2: Create Stack Navigation

```js
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import About from './screens/About';
import Help from './screens/Help';

// Call Stack Navigator
const Stack = createStackNavigator();
```

After imports create a new stack.

```js
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
}
```

After creating `HomeStack` add under `NavigationContainer`.

```js
function App() {
  return (
    <NavigationContainer>
      <HomeStack /> {/* <<< Add this line */}
    </NavigationContainer>
  );
}
```

## Step 3: Navigate between screens

- Open `Home` which is under `screens/Home`.

```js
<Button
    onPress={() => props.navigation.navigate('About')} {/* <<< Add this line and explain */}
    title="Go to About"
/>
```


- Open `About` which is under `screens/About`. This is `goBack()` example

```js
<Button
    onPress={() => props.navigation.goBack()} {/* <<< Add this line and explain */}
    title="Back to Home"
/>
```

## Step 4: Passing Props between Screens

Firstly, pass your props from `Home` screen. 

```js
<Button
    onPress={() => props.navigation.navigate('About', { username: 'Kerem' })}
    title="Go to About"
/>
```

To read the data from navigation.

Open `About` screen. And read data from props.

```js
<Text>{props.route.params.username}</Text>
```

## Step 5: Create Tab Navigation

```js
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Settings from './screens/Settings';
import Password from './screens/Password';
import Notifications from './screens/Notifications';

const Tab = createBottomTabNavigator();
```

After imports create a new stack.
 
```js
function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
}
```

Create tabs now and import

```js
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}
```

Add tabs under the `NavigationContainer`.

```js
function App() {
  return (
    <NavigationContainer>
      <Tabs /> {/* <<< Add this line */}
    </NavigationContainer>
  );
}
```

## Step 5: Styling your Navigation

Stack styling with `screenOptions`. Open `App.js` and the following options.

```js
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Help" component={Help} />
    </Stack.Navigator>
  );
}
```

### Custom Options in Screen.

Open `Home` screen and add this custom screen title.

```js
export default function HomeScreen(props) {
  props.navigation.setOptions({ // <<< Add this line
    title: 'My Custom Title',
    headerStyle: { backgroundColor: '#00d2d3' },
  });

  return (
    // Other code blocks
}
```

### Styling BottomTabs

To style your `BottomTabs`. You will use the `tabBarOptions` and `screenOptions`. Open

```js
<Tab.Navigator
  tabBarOptions={{ // Add these lines
    activeTintColor: '#00d2d3',
    inactiveTintColor: 'gray',
  }}>
  <Tab.Screen name="Home" component={HomeStack} />
  <Tab.Screen name="Settings" component={SettingsStack} />
</Tab.Navigator>
```

Using Icons in BottomTabs

```js
import Ionicons from 'react-native-vector-icons/Ionicons';
```

After importing `IonIcons`. Create a `screenOptions` for add `Icon`.

```js
function AfterLogin() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#00d2d3',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'hammer-outline' : 'cog-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}
```

That's all, you are a Hero now!