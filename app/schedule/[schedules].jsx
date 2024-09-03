// Import necessary libraries
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useTheme } from "@/Context/ThemeContext";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { Link, router, useLocalSearchParams } from "expo-router";
import { doctors } from "@/constants/data";

// Define the screens for each tab
const UpcomingScreenRoute = () => {
  const { scheduledDoctorId } = useLocalSearchParams();
  const decodedId = decodeURIComponent(scheduledDoctorId);
  const doctor = doctors.find(
    (doc) => decodeURIComponent(doc.name) === decodedId
  );

  if (!doctor) {
    return (
      <View>
        <Text>Schedule Not Found</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
};

const CompletedScreenRoute = () => {
  const { scheduledDoctorId } = useLocalSearchParams();
  const decodedId = decodeURIComponent(scheduledDoctorId);
  const doctor = doctors.find(
    (doc) => decodeURIComponent(doc.name) === decodedId
  );

  if (!doctor) {
    return (
      <View>
        <Text>Schedule Not Found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const CanceledScreenRoute = () => {
  const { scheduledDoctorId } = useLocalSearchParams();
  const decodedId = decodeURIComponent(scheduledDoctorId);
  const doctor = doctors.find(
    (doc) => decodeURIComponent(doc.name) === decodedId
  );

  if (!doctor) {
    return (
      <View>
        <Text>Schedule Not Found</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const renderScene = SceneMap({
  first: UpcomingScreenRoute,
  second: CompletedScreenRoute,
  third: CanceledScreenRoute,
});

// Create the SchedulesDetails
const SchedulesDetails = () => {
  const { scheduledDoctorId } = useLocalSearchParams();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const FocusedLineColor = isDarkTheme ? "#0066FF" : "#0066FF";
  const TextLineColor = isDarkTheme ? "#ffffff" : "#ffffff";
  const FocusedTextLineColor = isDarkTheme ? "#FFFF00" : "#000000";

  const [index, setIndex] = useState(0);
  const { isDarkTheme } = useTheme();
  const [routes] = useState([
    { key: "first", title: "Upcoming" },
    { key: "second", title: "Completed" },
    { key: "third", title: "Canceled" },
  ]);

  const decodedId = decodeURIComponent(scheduledDoctorId);
  const doctor = doctors.find(
    (doc) => decodeURIComponent(doc.name) === decodedId
  );

  if (!doctor) {
    return (
      <View>
        <Text>Schedule Not Found</Text>
      </View>
    );
  }

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: "#0286FF",
        height: "100%",
        borderRadius: 8,
        width: "35%",
      }}
      style={{
        backgroundColor: "#E6E9E8",
        borderRadius: 8,
        width: "90%",
        marginLeft: 20,
        height: "6.5%",
        marginTop: 15,
        shadowColor: "#0000000", // iOS shadow color
        shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
        shadowOpacity: 0.2, // iOS shadow opacity
        shadowRadius: 3.84, // iOS shadow radius
        elevation: 5, // Android elevation for shadow
      }}
      renderLabel={({ focused, route }) => (
        <Text
          style={[
            {
              color: focused ? TextLineColor : FocusedTextLineColor,
              fontWeight: focused ? "600" : "600",
              textAlign: "center",
              paddingRight: 6,
              fontSize: 14,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            },
          ]}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: "" }}
      renderTabBar={renderTabBar}
    />
  );
};

export default SchedulesDetails;
