import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";

const SecurityRoomScreen = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  return (
    <View
      style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}
    >
      <Text style={{ color: TextColor }}>securityRoom</Text>
    </View>
  );
};

export default SecurityRoomScreen;

const styles = StyleSheet.create({ container: { flex: 1 } });
