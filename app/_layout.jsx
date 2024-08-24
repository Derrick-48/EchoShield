import { Stack } from "expo-router";

import { ThemeProvider } from "@/Context/ThemeContext";

const RootLayout = () => {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index"  options={{headerShown :  false}} />
        <Stack.Screen name="(Root)" options={{headerShown :  false}} />
        <Stack.Screen name="(auth)" options={{headerShown :  false}} />
      </Stack>
    </ThemeProvider>
  );
}

export default  RootLayout;