import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { photos } from "@/constants/data";

const PhotosRoutes = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={photos}
      renderItem={({ item, index }) => (
        <TouchableOpacity onLongPress={() => console.log(index)}>
          <View style={{ flex: 1, aspectRatio: 1, padding: 10 }}>
            <Image
              key={index}
              source={item}
              style={{ width: "100%", height: "100%", borderRadius: 12 }}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

const LikesRoutes = () => <View style={{ flex: 1 }}></View>;

const renderScene = SceneMap({
  first: PhotosRoutes,
  second: LikesRoutes,
});

const IncidentsProfileSection = () => {
  const Layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Photos" },
    { key: "second", title: "Likes" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: FocusedLineColor,
      }}
      style={{
        backgroundColor: ScreenBackgroundColor,
        height: 44,
      }}
      renderLabel={({ focused, route }) => (
        <Text
          style={[
            {
              color: focused ? TextLineColor : FocusedTextLineColor,
              fontWeight: "500",
            },
          ]}
        >
          {route.title}
        </Text>
      )}
    />
  );

  const { isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const FocusedLineColor = isDarkTheme ? "#0066FF" : "#0066FF";
  const TextLineColor = isDarkTheme ? "#ffffff" : "#0066FF";
  const FocusedTextLineColor = isDarkTheme ? "#FFFF00" : "#000000";

  return (
    <View style={{ flex: 1, backgroundColor: ScreenBackgroundColor }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Layout.width }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default IncidentsProfileSection;

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
  profileContainer: {
    width: "100%",
  },
  Btn: {
    width: 124,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
