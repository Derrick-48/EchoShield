import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/Context/ThemeContext";

const NotifiedSettingsScreen = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}
    >
      <Text style={{ color: TextColor }}>NotifiedSettingsScreen</Text>
    </SafeAreaView>
  );
};

export default NotifiedSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
