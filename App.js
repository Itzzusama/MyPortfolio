// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//Screens
import Home from './SRC/Screens/Home';
import Education from './SRC/Screens/Education';
import Experience from './SRC/Screens/Experience';
import Certification from './SRC/Screens/Certification';
import SocialAcc from './SRC/Screens/Social';
import About from './SRC/Screens/About';
import Splash from './SRC/Screens/Splash';
//Navigator
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: 'purple',
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: () => <Text style={{color: '#ffffff'}}>Home</Text>,
        }}
      />
      <Drawer.Screen
        name="Education"
        component={Education}
        options={{
          drawerLabel: () => <Text style={{color: '#ffffff'}}>Education</Text>,
        }}
      />
      <Drawer.Screen
        name="Experience"
        component={Experience}
        options={{
          drawerLabel: () => (
            <Text style={{color: '#ffffff'}}>Experience</Text> // Change the color as desired
          ),
        }}
      />
      <Drawer.Screen
        name="Certification"
        component={Certification}
        options={{
          drawerLabel: () => (
            <Text style={{color: '#ffffff'}}>Certification</Text> // Change the color as desired
          ),
        }}
      />
      <Drawer.Screen
        name="SocialAcc"
        component={SocialAcc}
        options={{
          drawerLabel: () => (
            <Text style={{color: '#ffffff'}}>Social Accounts</Text> // Change the color as desired
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerLabel: () => (
            <Text style={{color: '#ffffff'}}>About Me</Text> // Change the color as desired
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        {/* <Stack.Screen name="First" component={First} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
