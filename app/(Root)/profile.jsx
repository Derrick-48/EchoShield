import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";

const ProfileSection = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";

  return (
    <View>
      <Text>ProfileSection</Text>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({});
