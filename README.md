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

