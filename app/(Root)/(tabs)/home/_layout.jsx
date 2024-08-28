import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/Context/ThemeContext";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeLayout() {
  const { isDarkTheme } = useTheme();
  const statusBarStyle = isDarkTheme ? "light" : "dark";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";

  return (
    <>
      <StatusBar style={statusBarStyle} />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="notifications"
          options={{ headerShown: true, presentation: "modal" }}
        />
        <Stack.Screen
          name="incidents"
          options={{
            headerShown: true,
            presentation: "modal",
            headerTitle: "Captured Incidents",
          }}
        />
      </Stack>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  rightIconsContainer: {
    flexDirection: "row",
  },
});
