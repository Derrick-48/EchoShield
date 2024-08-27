import React from "react";
import { Stack } from "expo-router";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const SettingsLayout = () => {
  const { isDarkTheme } = useTheme();
  const StatusBarStyle = isDarkTheme ? "light" : "dark";
  return (
    <>
      <StatusBar style={StatusBarStyle} />
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, headerTitle: "Settings" }}
        />
        <Stack.Screen
          name="editProfile"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen
          name="securityRoom"
          options={{ headerShown: true, presentation: "modal" }}
        />
        <Stack.Screen
          name="notifiedSettings"
          options={{
            headerShown: false,
            presentation: "card",
          }}
        />
        <Stack.Screen
          name="privacy"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen
          name="subscription"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen
          name="support"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen
          name="TermsAndPolicies"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen
          name="dataSaver"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen
          name="reportProblem"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen
          name="addAccount"
          options={{ headerShown: false, presentation: "card" }}
        />
      </Stack>
    </>
  );
};

export default SettingsLayout;
