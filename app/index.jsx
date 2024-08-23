import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../Context/ThemeContext';


const HomeScreen = () => {
  const { theme, toggleTheme, isDarkTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {isDarkTheme ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} color={theme.colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
