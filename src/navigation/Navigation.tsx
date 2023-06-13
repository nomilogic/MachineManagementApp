import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MachineTypesScreen from '../screens/MachineTypesScreen';
import MachinesScreen from '../screens/MachinesScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MachineTypes" component={MachineTypesScreen} />
    <Stack.Screen name="Machines" component={MachinesScreen} />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Main" component={MainStack} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Navigation;
