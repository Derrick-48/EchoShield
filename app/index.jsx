// app/index.js (or HomeScreen.js depending on your structure)
import React from 'react';
import { View } from 'react-native';
import { useCommonStyles } from '@/constants/CommonStyles';
import { useTheme } from '../Context/ThemeContext';
import Onboarding from './Intro/onboarding'; // Import the Onboarding component

const HomeScreen = () => {
  const { theme, toggleTheme, isDarkTheme } = useTheme();
  const styles = useCommonStyles();

  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
};

export default HomeScreen;
