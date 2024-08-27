import { Tabs, useNavigation, router, usePathname } from "expo-router";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { useTheme } from "@/Context/ThemeContext";
import { StatusBar } from "expo-status-bar";
import HeaderCustom from "@/components/HeaderCustom";

const TabsLayout = () => {
  const { isDarkTheme } = useTheme();
  const navigation = useNavigation();
  const statusBarStyle = isDarkTheme ? "light" : "dark";
  const backgroundColor = isDarkTheme ? "#ffffff" : "#0066FF";
  const BorderColor = isDarkTheme ? "#151718" : "#ffffff";
  const containerBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const TabIconBackgroundColor = isDarkTheme ? "#151718" : "#ffffff";
  const TabIconColor = isDarkTheme ? "#0066FF" : "#151718";
  const TabIconActiveColor = isDarkTheme ? "#ffffff" : "#ffffff";
  const TabIconInActiveColor = isDarkTheme ? "#ffffff" : "#151718";

  return (
    <View
      style={[styles.container, { backgroundColor: containerBackgroundColor }]}
    >
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: backgroundColor,
            position: "relative",
            bottom: 40,
            justifyContent: "center",
            alignSelf: "center",
            height: 63,
            marginHorizontal: 90,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 50,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: BorderColor,
            borderTopColor: BorderColor,
            width: "60%",
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: TabIconInActiveColor,
          tabBarActiveTintColor: TabIconActiveColor,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 30,
                  backgroundColor: focused
                    ? TabIconColor
                    : TabIconBackgroundColor,
                }}
              >
                <SimpleLineIcons name="disc" size={25} color={color} />
              </View>
            ),
            header: () => {
              return (
                <>
                  <SafeAreaView>
                    <StatusBar style={statusBarStyle} />
                    <HeaderCustom
                      isDarkTheme={isDarkTheme}
                      navigation={navigation}
                      LeftIconName={"menu"}
                      RightFirstIconName={"notifications"}
                      HeaderName={"Home"}
                      RightSecondIconName={"person"}
                      onLeftPress={() => navigation.openDrawer()}
                      onFirstRightPress={() => {
                        router.navigate("/(tabs)/home/notifications");
                      }}
                      onRightSecondPress={() => {
                        router.navigate("/(tabs)/home/HomeProfile");
                      }}
                    />
                  </SafeAreaView>
                </>
              );
            },
          }}
        />
        <Tabs.Screen
          name="Aid"
          options={{
            tabBarLabel: "Space-Aid",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 30,
                  backgroundColor: focused
                    ? TabIconColor
                    : TabIconBackgroundColor,
                }}
              >
                <AntDesign name="Safety" size={25} color={color} />
              </View>
            ),
            headerShown: null,
          }}
        />
        <Tabs.Screen
          name="History"
          options={{
            tabBarLabel: "Your History",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 30,
                  backgroundColor: focused
                    ? TabIconColor
                    : TabIconBackgroundColor,
                }}
              >
                <FontAwesome name="stack-overflow" size={25} color={color} />
              </View>
            ),
            headerShown: null,
          }}
        />
        <Tabs.Screen
          name="Location"
          options={{
            tabBarLabel: "Current Location",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 30,
                  backgroundColor: focused
                    ? TabIconColor
                    : TabIconBackgroundColor,
                }}
              >
                <FontAwesome name="map-o" size={25} color={color} />
              </View>
            ),
            headerShown: null,
          }}
        />
      </Tabs>
      <StatusBar style={statusBarStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
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

export default TabsLayout;
