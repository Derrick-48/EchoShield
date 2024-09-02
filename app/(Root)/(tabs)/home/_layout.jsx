import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "@/Context/ThemeContext";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderCustom from "@/components/HeaderCustom";
import { useNavigation } from "expo-router";
import { View } from "react-native";
import { router } from "expo-router";

export default function HomeLayout() {
  const navigation = useNavigation();
  const { isDarkTheme } = useTheme();
  const statusBarStyle = isDarkTheme ? "light" : "light";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#0066FF";

  return (
    <>
      <StatusBar style={statusBarStyle} />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Home",
            header: () => {
              return (
                <View style={{}}>
                  <View style={{}}>
                    <HeaderCustom
                      isDarkTheme={isDarkTheme}
                      navigation={navigation}
                      LeftIconName={"menu"}
                      RightFirstIconName={"notifications"}
                      HeaderName={"      Home"}
                      RightSecondIconName={"person"}
                      onLeftPress={() => navigation.openDrawer()}
                      onFirstRightPress={() => {
                        router.navigate("/(tabs)/home/notifications");
                      }}
                      onRightSecondPress={() => {
                        router.navigate("/(tabs)/home/incidents");
                      }}
                    />
                  </View>
                </View>
              );
            },
          }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            headerShown: true,
            presentation: "modal",
            headerTitle: "Notifications",
            headerTitleStyle: { color: TextColor },
            headerStyle: { backgroundColor: ScreenBackgroundColor },
          }}
        />
        <Stack.Screen
          name="incidents"
          options={{
            headerShown: true,
            presentation: "modal",
            headerTitle: "Captured Incidents",
            headerTitleStyle: { color: TextColor },
            headerStyle: { backgroundColor: ScreenBackgroundColor },
          }}
        />
        <Stack.Screen
          name="EmergencyServices"
          options={{
            headerShown: true,
            presentation: "card",
            headerTitle: "Emergency Services",
            headerTitleStyle: { color: TextColor },
            headerStyle: { backgroundColor: ScreenBackgroundColor },
          }}
        />
      </Stack>
    </>
  );
}
