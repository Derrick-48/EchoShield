import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // or any other icon set from react-native-vector-icons
import { useTheme } from "@/Context/ThemeContext";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";

const HeaderCustom = ({
  onLeftPress,
  onFirstRightPress,
  onRightSecondPress,
  isDarkTheme,
  navigation,
}) => {
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";

  return (
    <>
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: ScreenBackgroundColor },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.iconContainer,
            { backgroundColor: IconBackgroundColor },
          ]}
          onPress={onLeftPress}
        >
          <Icon name="menu" size={24} color={TextColor} />
        </TouchableOpacity>

        <Text style={[styles.headerText, { color: TextColor }]}>Dashboard</Text>

        <View style={styles.rightIconsContainer}>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              { backgroundColor: IconBackgroundColor },
            ]}
            onPress={onFirstRightPress}
          >
            <Icon name="notifications" size={24} color={TextColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.iconContainer,
              { backgroundColor: IconBackgroundColor },
            ]}
            onPress={onRightSecondPress}
          >
            <Icon name="person" size={24} color={TextColor} />
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
