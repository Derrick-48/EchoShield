import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileSection = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const navigation = useNavigation();
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";
  const statusBarStyle = isDarkTheme ? "light" : "dark";

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: ScreenBackgroundColor,
        },
      ]}
    >
      <View
        style={[
          styles.headerContainer,
          {
            backgroundColor: ScreenBackgroundColor,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.iconContainer,
            { backgroundColor: IconBackgroundColor },
          ]}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={24} color={TextColor} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: TextColor }]}>Profile</Text>
      </View>

      <Text style={{ color: TextColor }}>ProfileSection</Text>
    </SafeAreaView>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",

    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 100,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  rightIconsContainer: {
    flexDirection: "row",
  },
});
