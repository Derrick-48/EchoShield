import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { useTheme } from "@/Context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import { useUser } from "@clerk/clerk-expo";

const CustomDrawerContent = (props) => {
  const { isDarkTheme } = useTheme();
  const { user } = useUser(); // Get the current user from the Clerk context
  const userName = user?.fullName || "No Full Name";
  const userProfile = user?.imageUrl;
  const email = user?.emailAddresses[0].emailAddress || "Email Not Found";

  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const DrawerButtonActiveText = isDarkTheme ? "#ffffff" : "#ffffff";
  const DrawerButtonInActiveText = isDarkTheme ? "#ffffff" : "#151718";
  const DrawerButtonActiveLayer = isDarkTheme ? "#0066FF" : "#151718";
  const DrawerButtonInActiveLayer = isDarkTheme ? "#151718" : "#ffffff";
  const statusBarStyle = isDarkTheme ? "light" : "dark";
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <StatusBar style={statusBarStyle} />
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: userProfile }}
          width={60}
          height={60}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={[styles.userName, { color: TextColor }]}>
            {userName}
          </Text>
          <Text style={[styles.userEmail, { color: TextColor }]}>{email}</Text>
        </View>
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={
              pathname == "/home"
                ? DrawerButtonActiveText
                : DrawerButtonInActiveText
            }
          />
        )}
        label={"home"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/home"
                ? DrawerButtonActiveText
                : DrawerButtonInActiveText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/home"
              ? DrawerButtonActiveLayer
              : DrawerButtonInActiveLayer,
        }}
        onPress={() => {
          router.push("/(Root)/(tabs)/home");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == "/profile" ? "#fff" : DrawerButtonInActiveText}
          />
        )}
        label={"Profile"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/profile"
                ? DrawerButtonActiveText
                : DrawerButtonInActiveText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/profile"
              ? DrawerButtonActiveLayer
              : DrawerButtonInActiveLayer,
        }}
        onPress={() => {
          router.push("/(Root)/profile");
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={
              pathname == "/Settings"
                ? DrawerButtonActiveText
                : DrawerButtonInActiveText
            }
          />
        )}
        label={"Settings"}
        labelStyle={[
          styles.navItemLabel,
          {
            color:
              pathname == "/Settings"
                ? DrawerButtonActiveText
                : DrawerButtonInActiveText,
          },
        ]}
        style={{
          backgroundColor:
            pathname == "/Settings"
              ? DrawerButtonActiveLayer
              : DrawerButtonInActiveLayer,
        }}
        onPress={() => {
          router.push("/Settings");
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function RootLayout() {
  const { isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: ScreenBackgroundColor },
      }}
    >
      <Drawer.Screen name="profile" options={{ headerShown: false }} />
      <Drawer.Screen name="Settings" options={{ headerShown: false }} />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    flex: 1,
    justifyContent: "flex-start",
  },
  userImg: {
    borderRadius: 40,
    paddingLeft: -5,
  },
  userDetailsWrapper: {
    flex: 1,
    marginTop: 12,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 13,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});
