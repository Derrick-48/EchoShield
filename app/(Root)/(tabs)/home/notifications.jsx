import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";

const NotifiedState = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";

  return (
    <View style={{ backgroundColor: ScreenBackgroundColor }}>
      <Text style={{ color: TextColor }}>NotifiedState</Text>
    </View>
  );
};

export default NotifiedState;

const styles = StyleSheet.create({});
