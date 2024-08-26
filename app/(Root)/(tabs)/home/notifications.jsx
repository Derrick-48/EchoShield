import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";

const NotifiedState = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  return (
    <View>
      <Text>NotifiedState</Text>
    </View>
  );
};

export default NotifiedState;

const styles = StyleSheet.create({});
