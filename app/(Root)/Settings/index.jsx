import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/Context/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import ToggleSwitch from "toggle-switch-react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { imageDataURL } from "@/constants/ImageData";

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const IconColor = isDarkTheme ? "#ffffff" : "#000000";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const OnSwitchColor = isDarkTheme ? "#151718" : "#ffff";
  const OffSwitchColor = isDarkTheme ? "#151718" : "#ffff";
  const SectionBackgroundColor = isDarkTheme ? "#333333" : "#f0f0f0";
  const StatusBarStyle = isDarkTheme ? "light" : "dark";
  const navigation = useNavigation();
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";

  // accountItems Navigation functions (start)
  const editProfile = () => {
    router.navigate("/Settings/editProfile");
  };

  const securityRoom = () => {
    router.navigate("/Settings/securityRoom");
  };

  const notified = () => {
    router.navigate("/Settings/notifiedSettings");
  };

  const privacy = () => {
    router.navigate("/Settings/privacy");
  };

  // supportItems Navigation functions (start)

  const subscription = () => {
    router.navigate("/Settings/subscription");
  };

  const support = () => {
    router.navigate("/Settings/support");
  };

  const TermsAndPolicies = () => {
    router.navigate("/Settings/TermsAndPolicies");
  };

  // cacheAndCellularItems Navigation functions (start)

  const freeUpSpace = () => {
    Alert.alert("Space Freed");
  };

  const dataSaver = () => {
    router.navigate("/Settings/dataSaver");
  };

  // actionsItems Navigation functions (start)
  const reportProblem = () => {
    router.navigate("/Settings/reportProblem");
  };

  const addAccount = () => {
    router.navigate("/Settings/addAccount");
  };

  const logout = () => {
    Alert.alert("You've Successfully Logged Out");
  };

  const accountItems = [
    {
      icon: "account-circle",
      route: editProfile,
      text: "Edit Profile",
    },
    {
      icon: "security",
      route: securityRoom,
      text: "Security",
    },
    {
      icon: "notifications-none",
      route: notified,
      text: "Notifications",
    },
    {
      icon: "lock-outline",
      route: privacy,
      text: "Privacy",
    },
  ];

  const supportItems = [
    {
      icon: "credit-card",
      route: subscription,
      text: "My Subscription",
    },
    {
      icon: "help-outline",
      route: support,
      text: "Help & Support",
    },
    {
      icon: "info-outline",
      route: TermsAndPolicies,
      text: "Terms and Policies",
    },
  ];

  const cacheAndCellularItems = [
    {
      icon: "delete-outline",
      route: freeUpSpace,
      text: "Free Up Space",
    },
    {
      icon: "save-alt",
      route: dataSaver,
      text: "Data Saver",
    },
  ];

  const actionsItems = [
    {
      icon: "outlined-flag",
      route: reportProblem,
      text: "Report a problem",
    },
    {
      icon: "people-outline",
      route: addAccount,
      text: "Add account",
    },
    {
      icon: "logout",
      route: logout,
      text: "Log out",
    },
  ];
  const renderSettingsScreenItem = ({ icon, text, route }) => (
    <TouchableOpacity
      onPress={route}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
      }}
    >
      <MaterialIcons name={icon} size={24} color={IconColor} />
      <Text
        style={{
          marginLeft: 36,
          fontWeight: "600",
          color: TextColor,
          fontSize: 17,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: ScreenBackgroundColor }}>
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
        <Text style={[styles.headerText, { color: TextColor }]}>Settings</Text>
      </View>

      <StatusBar style={StatusBarStyle} />
      <ScrollView
        style={{ marginHorizontal: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Account Settings */}
        <View style={{ marginBottom: 3, padding: 10 }}>
          <Text
            style={{
              marginVertical: 10,
              fontWeight: "700",
              fontSize: 20,
              color: TextColor,
            }}
          >
            Account
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: SectionBackgroundColor,
            }}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsScreenItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* supportItems */}
        <View style={{ marginBottom: 3, padding: 10 }}>
          <Text
            style={{
              marginVertical: 10,
              fontWeight: "700",
              fontSize: 20,
              color: TextColor,
            }}
          >
            Support & About
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: SectionBackgroundColor,
            }}
          >
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsScreenItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* cacheAndCellularItems */}
        <View style={{ marginBottom: 3, padding: 10 }}>
          <Text
            style={{
              marginVertical: 10,
              fontWeight: "700",
              fontSize: 20,
              color: TextColor,
            }}
          >
            Cache & Cellular
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: SectionBackgroundColor,
            }}
          >
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsScreenItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        {/* actionsItems */}
        <View style={{ marginBottom: 3, padding: 10 }}>
          <Text
            style={{
              marginVertical: 10,
              fontWeight: "700",
              fontSize: 20,
              color: TextColor,
            }}
          >
            Actions
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: SectionBackgroundColor,
            }}
          >
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsScreenItem(item)}
              </React.Fragment>
            ))}

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <MaterialIcons
                name="brightness-6" // You can change this to any icon you like
                size={24}
                color={IconColor}
                style={{ marginRight: 29 }}
              />
              <ToggleSwitch
                isOn={isDarkTheme}
                onColor="green"
                offColor="#0066FF"
                label="Dark Theme"
                labelStyle={{
                  color: TextColor,
                  fontWeight: "600",
                  fontSize: 16,
                }}
                size="medium"
                onToggle={toggleTheme}
              />
            </View>
          </View>
        </View>
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
  rightIconsContainer: {
    flexDirection: "row",
  },
  profileContainer: {
    width: "100%",
  },
});
