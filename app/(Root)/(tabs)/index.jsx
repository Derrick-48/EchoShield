import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@/Context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeTab = () => {
  const {  isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? '#151718' : '#ffff';
  const  TextColor = isDarkTheme ? '#ffffff' : '#000000';


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}>
      <Text style={ [ styles.text , {color : TextColor }  ]}>Home Tab</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight : "500"
  },
});

export default HomeTab;
