import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/Context/ThemeContext";
import React from "react";

export default function HomeLayout() {
  const { isDarkTheme } = useTheme();
  const statusBarStyle = isDarkTheme ? "light" : "dark";

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
          name="HomeProfile"
          options={{ headerShown: true, presentation: "modal" }}
        />
      </Stack>
    </>
  );
}
