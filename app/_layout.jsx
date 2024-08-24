import { Stack } from "expo-router";

import { ThemeProvider } from "@/Context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="intro/onboarding" />
      </Stack>
    </ThemeProvider>
  );
}

export default  RootLayout;