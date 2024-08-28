import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // or any other icon set from react-native-vector-icons
import { useTheme } from "@/Context/ThemeContext";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const HeaderCustom = ({
  onLeftPress,
  onFirstRightPress,
  onRightSecondPress,
  isDarkTheme,
  navigation,
  HeaderName,
  LeftIconName,
  RightFirstIconName,
  RightSecondIconName,
}) => {
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";
  const statusBarStyle = isDarkTheme ? "light" : "dark";

  return (
    <>
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: ScreenBackgroundColor },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <TouchableOpacity
          style={[
            styles.iconContainer,
            { backgroundColor: IconBackgroundColor },
          ]}
          onPress={onLeftPress}
        >
          <Icon name={LeftIconName} size={24} color={TextColor} />
        </TouchableOpacity>

        <Text style={[styles.headerText, { color: TextColor }]}>
          {HeaderName}
        </Text>

        <View style={styles.rightIconsContainer}>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              { backgroundColor: IconBackgroundColor },
            ]}
            onPress={onFirstRightPress}
          >
            <Icon name={RightFirstIconName} size={24} color={TextColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              { backgroundColor: IconBackgroundColor },
            ]}
            onPress={onRightSecondPress}
          >
            <Icon name={RightSecondIconName} size={24} color={TextColor} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HeaderCustom;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 60,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
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
