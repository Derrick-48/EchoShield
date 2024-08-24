import { Stack } from "expo-router";

import { ThemeProvider } from "@/Context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index"  />
        <Stack.Screen name="(Root)" options={{headerShown :  false}} />
      </Stack>
    </ThemeProvider>
  );
}

export default  RootLayout;