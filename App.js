// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from './ThemeContext';

import HomeScreen from './screens/HomeScreen';
import MyCardsScreen from './screens/MyCardsScreen';
import SettingsScreen from './screens/SettingsScreen';
import StatisticsScreen from './screens/StatisticsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const { isDarkTheme } = useTheme();

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'My Cards') {
        iconName = focused ? 'card' : 'card-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      } else if (route.name === 'Statistics') {
        iconName = focused ? 'stats-chart' : 'stats-chart-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: isDarkTheme ? '#1a1a2e' : '#ffffff',
    },
    headerStyle: {
      backgroundColor: isDarkTheme ? '#1a1a2e' : '#ffffff',
    },
    headerTintColor: isDarkTheme ? '#ffffff' : '#000000',
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
