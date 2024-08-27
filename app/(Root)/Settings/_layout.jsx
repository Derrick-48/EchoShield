import React from "react";
import { Stack } from "expo-router";

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, headerTitle: "Settings" }}
      />
      <Stack.Screen
        name="editProfile"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="securityRoom"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="notifiedSettings"
        options={{
          headerShown: true,
          presentation: "card",
        }}
      />
      <Stack.Screen
        name="privacy"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="subscription"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="support"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="TermsAndPolicies"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="freeUpSpace"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="dataSaver"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="reportProblem"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen
        name="addAccount"
        options={{ headerShown: true, presentation: "card" }}
      />
    </Stack>
  );
};

export default SettingsLayout;
