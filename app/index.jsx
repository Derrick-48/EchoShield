import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { useCommonStyles } from "@/constants/CommonStyles";
import { useTheme } from "../Context/ThemeContext";
import { Link } from "expo-router";

const HomeScreen = () => {
  const { theme, toggleTheme, isDarkTheme } = useTheme();
  const styles = useCommonStyles();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* <Text style={[styles.text, { color: theme.colors.text }]}>
        {isDarkTheme ? "Dark Mode" : "Light Mode"}
      </Text>

      <Text style={styles.text}> Trying Out the theme</Text>
      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        color={theme.colors.primary}
      /> */}
      <Link href="/(auth)" asChild >
      <TouchableOpacity>
        <Text  >SignIn Now </Text>
      </TouchableOpacity>
    </Link>
    </View>
  );
};

export default HomeScreen;
