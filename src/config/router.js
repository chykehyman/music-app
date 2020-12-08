import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Discover, Profile, Splash } from '../screens';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          inactiveTintColor: 'gray',
          activeTintColor: '#ff5b77',
          showLabel: false,
          tabStyle: {
            backgroundColor: '#fff',
            height: 60,
            paddingBottom: 12,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? 'compass' : 'compass-outline'}
                size={28}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Icon
                name={focused ? 'account' : 'account-outline'}
                size={28}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor={'transparent'} />
    </>
  );
};

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacks;
