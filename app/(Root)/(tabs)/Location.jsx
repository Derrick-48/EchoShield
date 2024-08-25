import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react';
import { useTheme } from '@/Context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const LocationTab = () => {
  const { toggleTheme , isDarkTheme } = useTheme();
  const backgroundColor = isDarkTheme ? '#000' : '#FFF';
  const ScreenBackgroundColor = isDarkTheme ? '#151718' : '#ffff';
  const  TextColor = isDarkTheme ? '#ffffff' : '#000000'; 

  return (
    <SafeAreaView style = {[styles.container , {backgroundColor :  ScreenBackgroundColor}]} >
      <Text style = {[  styles.text ,{ color : TextColor }]} >LocationTab</Text>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
            <Text style={styles.buttonText}> {isDarkTheme ? "Light Mode" : "Dark Mode"}
            </Text>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LocationTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight : "500"
  },
  button: {
    backgroundColor: '#0066FF',
    padding: 15,
    borderRadius: 30,
    marginTop: 40,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#0066FF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})