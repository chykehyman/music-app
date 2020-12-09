import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Discover, Profile, Splash, Player } from '../screens';
import { StatusBar, View } from 'react-native';
import CategoriesDetails from '../components/categories/CategoriesDetails';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <View style={{ paddingTop: Platform.OS === 'android' ? 20 : 0 }} />
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
      <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
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
      <Stack.Screen
        name="Player"
        component={Player}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={CategoriesDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Stacks;
