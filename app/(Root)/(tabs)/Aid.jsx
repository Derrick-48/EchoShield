import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icons from MaterialCommunityIcons or any other icon set

const AidTab = () => {
  const { isDarkTheme } = useTheme();
  const backgroundColor = isDarkTheme ? "#000" : "#FFF";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}
    >
      <ScrollView>
        <View className=" ">
          {/* Card Header */}
          <View className="p-4">
            <Text className="text-xl font-bold">Health Monitoring</Text>
            <Text className="text-sm text-gray-500">
              Track your vital signs, activity, and more.
            </Text>
          </View>

          {/* Card Content */}
          <View className=" gap-4">
            {/* First Row of Buttons */}
            <View className=" flex-row gap-4 justify-center">
              <TouchableOpacity className="h-14 w-36  flex items-center justify-center bg-white border border-gray-300 rounded-xl">
                <View className="flex items-center justify-center flex-row">
                  <Icon
                    name="heart-pulse"
                    size={24}
                    color="#EF4444"
                    style={{ marginBottom: 4 }}
                  />
                  <Text className="text-sm font-Jakarta">Heart Rate</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="h-14 w-36  flex items-center justify-center bg-white border border-gray-300 rounded-xl">
                <View className="flex items-center justify-center  flex-row">
                  <Icon
                    name="run"
                    size={24}
                    color="#3B82F6"
                    style={{ marginBottom: 4 }}
                  />
                  <Text className="text-sm  font-Jakarta ">Activity</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Second Row of Buttons */}
            <View className=" flex-row gap-4 justify-center ">
              <TouchableOpacity className="h-14 w-36  flex items-center justify-center bg-white border border-gray-300 rounded-xl">
                <View className="flex items-center justify-center flex-row">
                  <Icon
                    name="thermometer"
                    size={24}
                    color="#F59E0B"
                    style={{ marginBottom: 4 }}
                  />
                  <Text className="text-sm  font-Jakarta ">Temperature</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="h-14 w-36  flex items-center justify-center bg-white border border-gray-300 rounded-xl">
                <View className="flex items-center justify-center flex-row">
                  <Icon
                    name="water-percent"
                    size={24}
                    color="#6366F1"
                    style={{ marginBottom: 4 }}
                  />
                  <Text className="text-sm  font-Jakarta ">Blood Oxygen</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Appointments Header */}
        <View className="">
          {/* Card Header */}
          <View className="p-4">
            <Text className="text-xl font-bold">Appointments</Text>
            <Text className="text-sm text-gray-500">
              View and manage your upcoming appointments.
            </Text>
          </View>

          {/* Card Content */}
          <View className=" gap-4  ">
            {/* First Row of Buttons */}
            <View className="flex-row gap-4  justify-center ">
              <TouchableOpacity className="h-14 w-36   flex items-center justify-center bg-white border border-gray-300 rounded-xl">
                <View className="flex items-center justify-center flex-row">
                  <Icon
                    name="calendar"
                    size={24}
                    color="#4CAF50"
                    style={{ marginBottom: 4 }}
                  />
                  <Text className="text-sm  font-Jakarta ">Upcoming</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="h-14 w-36   flex items-center justify-center bg-white border border-gray-300 rounded-xl">
                <View className="flex items-center justify-center flex-row">
                  <Icon
                    name="calendar-check"
                    size={24}
                    color="#FFC107"
                    style={{ marginBottom: 4 }}
                  />
                  <Text className="text-sm   font-Jakarta ">Past</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Second Row of Buttons */}
            <View className="flex-row gap-4 justify-center">
              <TouchableOpacity className="h-14 w-36  flex items-center justify-center bg-white border border-gray-300 rounded-xl">
                <View className="flex items-center justify-center flex-row">
                  <Icon
                    name="plus"
                    size={24}
                    color="#2196F3"
                    style={{ marginBottom: 4 }}
                  />
                  <Text className="text-sm   font-Jakarta ">Schedule</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="h-14 w-36  flex items-center justify-center bg-white border border-gray-300 rounded-xl">
                <View className="flex items-center justify-center flex-row">
                  <Icon
                    name="video"
                    size={24}
                    color="#E91E63"
                    style={{ marginBottom: 4 }}
                  />
                  <Text className="text-sm  font-Jakarta ">Telehealth</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default AidTab;
