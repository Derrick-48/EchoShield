import { Stack } from "expo-router";
import { useTheme } from "@/Context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

const InLayout = () => {
  const { isDarkTheme } = useTheme();
  const statusBarStyle = isDarkTheme ? "light" : "dark";
  const backgroundColor = isDarkTheme ? "#000000" : "#ffffff"; // Adjusted to match dark and light themes

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatusBar style={statusBarStyle} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InLayout;
