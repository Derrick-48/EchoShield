import React from "react";
import { View, StyleSheet } from "react-native";
import { useCommonStyles } from "@/constants/CommonStyles";
import { useTheme } from "../Context/ThemeContext";
import Onboarding from "./Intro/onboarding"; // Import the Onboarding component
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const { isDarkTheme } = useTheme();
  const styles = useCommonStyles();
  const statusBarStyle = isDarkTheme ? "light" : "dark";
  const backgroundColor = isDarkTheme ? "#000" : "#FFF";

  return (
    <>
      <View style={styles.container}>
        <StatusBar style={statusBarStyle} />
        <Onboarding />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF", // Default background color
  },
});

export default HomeScreen;
