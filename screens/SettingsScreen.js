import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../ThemeContext';

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const styles = createStyles(isDarkTheme);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Language</Text>
        <Ionicons name="chevron-forward" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>My Profile</Text>
        <Ionicons name="chevron-forward" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Contact Us</Text>
        <Ionicons name="chevron-forward" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Change Password</Text>
        <Ionicons name="chevron-forward" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={24} color="gray" />
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Text style={styles.itemText}>Theme</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkTheme ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleTheme}
          value={isDarkTheme}
        />
      </View>
    </View>
  );
};

const createStyles = (isDarkTheme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkTheme ? '#1a1a2e' : '#ffffff',
    padding: 20,
  },
  header: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isDarkTheme ? '#162447' : '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    color: isDarkTheme ? 'white' : 'black',
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: isDarkTheme ? '#162447' : '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
});

export default SettingsScreen;
