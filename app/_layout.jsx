import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { useTheme } from "@/Context/ThemeContext";
import { StatusBar } from "react-native";
import * as SecureStore from "expo-secure-store";
import { ThemeProvider } from "@/Context/ThemeContext";

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log("No values stored under key: " + key);
      }
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

const MainLayout = () => {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <ThemeProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(Root)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen
              name="Intro/onboarding"
              options={{ headerShown: false }}
            />
          </Stack>
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default MainLayout;
