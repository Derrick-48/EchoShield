import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import ToggleSwitch from "toggle-switch-react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@/Context/ThemeContext";
import { settingsSections } from "@/constants/settingsData"; // Adjust the path as needed
import LogoutModal from "@/constants/logoutModal";

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const settingsSectionsData = settingsSections(setModalVisible); // Create sections with the modal trigger

  const themeColors = {
    text: isDarkTheme ? "#ffffff" : "#000000",
    icon: isDarkTheme ? "#ffffff" : "#000000",
    screenBackground: isDarkTheme ? "#151718" : "#ffffff",
    sectionBackground: isDarkTheme ? "#333333" : "#f0f0f0",
    iconBackground: isDarkTheme ? "#252829" : "#f0f0f0",
    statusBarStyle: isDarkTheme ? "light" : "dark",
  };

  const renderSettingItem = ({ icon, text, route, action }) => (
    <TouchableOpacity
      key={text}
      onPress={() => (route ? router.navigate(route) : action())}
      style={styles.settingItemContainer}
    >
      <MaterialIcons name={icon} size={24} color={themeColors.icon} />
      <Text style={[styles.settingItemText, { color: themeColors.text }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: themeColors.screenBackground },
      ]}
    >
      <LogoutModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        isLoggingOut={isLoggingOut}
        setIsLoggingOut={setIsLoggingOut}
      />
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: themeColors.screenBackground },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.iconContainer,
            { backgroundColor: themeColors.iconBackground },
          ]}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={24} color={themeColors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: themeColors.text }]}>
          Settings
        </Text>
      </View>

      <StatusBar style={themeColors.statusBarStyle} />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {settingsSectionsData.map((section, index) => (
          <View key={index} style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle, { color: themeColors.text }]}>
              {section.title}
            </Text>
            <View
              style={[
                styles.sectionContent,
                { backgroundColor: themeColors.sectionBackground },
              ]}
            >
              {section.items.map(renderSettingItem)}
              {section.title === "Actions" && (
                <View style={styles.switchContainer}>
                  <MaterialIcons
                    name="brightness-6"
                    size={24}
                    color={themeColors.icon}
                  />
                  <ToggleSwitch
                    isOn={isDarkTheme}
                    onColor="green"
                    offColor="#0066FF"
                    label="Dark Theme"
                    labelStyle={[
                      styles.switchLabel,
                      { color: themeColors.text },
                    ]}
                    size="medium"
                    onToggle={toggleTheme}
                  />
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

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
    marginLeft: 90,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  scrollView: {
    marginHorizontal: 12,
  },
  sectionContainer: {
    marginBottom: 3,
    padding: 10,
  },
  sectionTitle: {
    marginVertical: 10,
    fontWeight: "700",
    fontSize: 20,
  },
  sectionContent: {
    borderRadius: 12,
  },
  settingItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 12,
  },
  settingItemText: {
    marginLeft: 36,
    fontWeight: "600",
    fontSize: 17,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  switchLabel: {
    fontWeight: "600",
    fontSize: 16,
  },
});
