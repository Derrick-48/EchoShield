import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeTabScreen = () => {
  const { isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const statusBarStyle = isDarkTheme ? "light" : "dark";

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}
      >
        <StatusBar style={statusBarStyle} />
        <Text style={[styles.text, { color: TextColor }]}>Home Tab</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default HomeTabScreen;
