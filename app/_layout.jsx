import { SplashScreen, Stack, Slot, useRouter, useSegments } from "expo-router";
import { useFonts } from "expo-font";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import { ThemeProvider } from "@/Context/ThemeContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { tokenCache } from "@/lib/auth";
import { LogBox } from "react-native";

const ClerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const [loaded, error] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  LogBox.ignoreLogs(["Warning : ..."]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(Root)"
        options={{ headerShown: false, headerTitle: "Back" }}
      />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false, headerTitle: "authentication" }}
      />
      <Stack.Screen name="+not-found" />
      <Stack.Screen
        name="doctors/[doctorId]"
        options={{ headerShown: false, headerTitle: "Doctors Profile" }}
      />
      <Stack.Screen
        name="doctors/allDoctors"
        options={{ headerShown: false, headerTitle: "Doctors Profile" }}
      />
      <Stack.Screen
        name="schedule/[schedules]"
        options={{ headerShown: true, headerTitle: "Schedule" }}
      />
      <Stack.Screen
        name="searchDoctor/doctorSearch"
        options={{ headerShown: true, headerTitle: "Search Doctor" }}
      />
      <Stack.Screen
        name="symptom/[sypmtoms]"
        options={{ headerShown: true, headerTitle: "Schedule" }}
      />
      <Stack.Screen
        name="searchDoctor/doctorProfile"
        options={{ headerShown: false, headerTitle: "Search Doctor" }}
      />
    </Stack>
  );
};

const RootLayoutNav = () => {
  if (!ClerkPublishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }
  return (
    <ThemeProvider>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={ClerkPublishableKey}
      >
        <ClerkLoaded>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <MainLayout />
          </GestureHandlerRootView>
        </ClerkLoaded>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default RootLayoutNav;
