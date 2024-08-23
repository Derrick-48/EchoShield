import { Stack } from "expo-router";
import { ThemeProvider } from "@/Context/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
    </ThemeProvider>
  );
}
