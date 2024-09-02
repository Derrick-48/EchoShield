import { Stack } from "expo-router";
import { useTheme } from "@/Context/ThemeContext";

const EmergenciesLayout = () => {
  const { isDarkTheme } = useTheme();
  const statusBarStyle = isDarkTheme ? "light" : "light";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#0066FF";

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          // presentation: "modal",
          headerTitle: "Police",
          // headerTitleStyle: { color: TextColor },
          // headerStyle: { backgroundColor: ScreenBackgroundColor },
        }}
      />
      <Stack.Screen
        name="Doctor"
        options={{
          headerShown: false,
          presentation: "card",
          headerTitle: "Doctor",
          // headerTitleStyle: { color: TextColor },
          // headerStyle: { backgroundColor: ScreenBackgroundColor },
        }}
      />
      <Stack.Screen
        name="Medicine"
        options={{
          headerShown: false,
          // presentation: "modal",
          headerTitle: "Medicine",
          // headerTitleStyle: { color: TextColor },
          // headerStyle: { backgroundColor: ScreenBackgroundColor },
        }}
      />
      <Stack.Screen
        name="Hospital"
        options={{
          headerShown: false,
          // presentation: "modal",
          headerTitle: "Hospital",
          // headerTitleStyle: { color: TextColor },
          // headerStyle: { backgroundColor: ScreenBackgroundColor },
        }}
      />
    </Stack>
  );
};

export default EmergenciesLayout;
