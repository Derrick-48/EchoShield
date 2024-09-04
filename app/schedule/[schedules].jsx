// Import necessary libraries
import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "@/Context/ThemeContext";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useLocalSearchParams } from "expo-router";
import { doctors } from "@/constants/data";
import UpcomingScreenRoute from "./UpcomingScreen";
import CompletedScreenRoute from "./CompletedScreen";
import CanceledScreenRoute from "./CanceledScreen";
import { images } from "@/constants";

// Create the SchedulesDetails
const SchedulesDetails = () => {
  const { scheduledDoctorId } = useLocalSearchParams();
  const TextLineColor = isDarkTheme ? "#ffffff" : "#ffffff";
  const FocusedTextLineColor = isDarkTheme ? "#FFFF00" : "#000000";

  // States for scheduling status
  // State to store schedules by status
  const [upcomingSchedules, setUpcomingSchedules] = useState([]);
  const [completedSchedules, setCompletedSchedules] = useState([]);
  const [canceledSchedules, setCanceledSchedules] = useState([]);

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

  // Calculate the status of the schedule
  useEffect(() => {
    if (doctor) {
      const currentDate = new Date();
      const upcoming = [];
      const completed = [];

      doctor.schedules.forEach((schedule) => {
        const scheduleDateTime = new Date(
          `${schedule.scheduleDate}T${schedule.scheduleTime.split(" - ")[0]}`
        ); // Extracting the start time

        if (scheduleDateTime > currentDate) {
          upcoming.push(schedule);
        } else {
          completed.push(schedule);
        }
      });

      setUpcomingSchedules(upcoming);
      setCompletedSchedules(completed);
      setCanceledSchedules([]); // Set an empty array for canceled schedules; update logic as needed
    }
  }, [doctor]);

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

  const renderScene = SceneMap({
    first: () =>
      upcomingSchedules.length > 0 ? (
        <UpcomingScreenRoute doctor={doctor} schedules={upcomingSchedules} />
      ) : (
        <View className="justify-center">
          <Image source={images.noResult} className="w-52 h-52  self-center " />
          <Text className="self-center font-JakartaBold text-xl ">
            No Upcoming schedules
          </Text>
        </View>
      ),
    second: () =>
      completedSchedules.length > 0 ? (
        <CompletedScreenRoute doctor={doctor} schedules={completedSchedules} />
      ) : (
        <View className="justify-center">
          <Image source={images.noResult} className="w-52 h-52  self-center " />
          <Text className="self-center font-JakartaBold text-xl ">
            No Completed schedules
          </Text>
        </View>
      ),
    third: () =>
      canceledSchedules.length > 0 ? (
        <CanceledScreenRoute doctor={doctor} schedules={canceledSchedules} />
      ) : (
        <View className="justify-center">
          <Image source={images.noResult} className="w-52 h-52  self-center " />
          <Text className="self-center font-JakartaBold text-xl ">
            No canceled schedules
          </Text>
        </View>
      ),
  });

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
