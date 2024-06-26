// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { Appearance } from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = Appearance.getColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(previousState => !previousState);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
