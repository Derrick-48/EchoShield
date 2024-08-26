import React from "react";
import { Stack } from "expo-router";

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="editProfile"
        options={{ headerShown: true, presentation: "card" }}
      />
      <Stack.Screen name="securityRoom" options={{ headerShown: true }} />
      <Stack.Screen name="notifiedSettings" options={{ headerShown: true }} />
      <Stack.Screen name="privacy" options={{ headerShown: true }} />
      <Stack.Screen name="subscription" options={{ headerShown: true }} />
      <Stack.Screen name="support" options={{ headerShown: true }} />
      <Stack.Screen name="TermsAndPolicies" options={{ headerShown: true }} />
      <Stack.Screen name="freeUpSpace" options={{ headerShown: true }} />
      <Stack.Screen name="dataSaver" options={{ headerShown: true }} />
      <Stack.Screen name="reportProblem" options={{ headerShown: true }} />
      <Stack.Screen name="addAccount" options={{ headerShown: true }} />
    </Stack>
  );
};

export default SettingsLayout;
