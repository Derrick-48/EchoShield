import { Stack } from "expo-router";
import { useTheme } from "@/Context/ThemeContext";
import { StatusBar } from "react-native";

import { ThemeProvider } from "@/Context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(Root)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
