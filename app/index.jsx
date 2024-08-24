import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { useCommonStyles } from "@/constants/CommonStyles";

import { useTheme } from "../Context/ThemeContext";

const HomeScreen = () => {
  const { theme, toggleTheme, isDarkTheme } = useTheme();
  const styles = useCommonStyles();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {isDarkTheme ? "Dark Mode" : "Light Mode"}
      </Text>

      <Text style={styles.text}> Trying Out the theme</Text>
      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default HomeScreen;
