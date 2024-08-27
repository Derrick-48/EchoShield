import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";

const DataSaverScreen = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}
    >
      <Text style={{ color: TextColor }}>dataSaver</Text>
    </SafeAreaView>
  );
};

export default DataSaverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
