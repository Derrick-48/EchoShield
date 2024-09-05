import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HistoryTab = () => {
  const { isDarkTheme } = useTheme();
  const backgroundColor = isDarkTheme ? "#000" : "#FFF";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const TextColor = isDarkTheme ? "white" : "black";
  const GrayTextColor = isDarkTheme ? "white" : "gray-500";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}
    >
      <View className="p-4 flex-1 mb-4">
        {/* Recent Alerts Card */}
        <View className="mb-4">
          <Text className={`text-xl font-bold mb-2 text-${TextColor} `}>
            Recent Alerts
          </Text>
          {/* Alert Items */}
          <View className="space-y-2">
            {/* First Alert */}
            <View className="flex flex-row items-start gap-2">
              <View className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                <Icon name="alert" size={20} color="#FFFFFF" />
              </View>
              <View>
                <Text className={`font-medium  text-${TextColor} `}>
                  Distress Signal Detected
                </Text>
                <Text className={`text-xs text- text-${GrayTextColor}`}>
                  2 min ago
                </Text>
              </View>
            </View>
            {/* Second Alert */}
            <View className="flex flex-row items-start gap-2">
              <View className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
                <Icon name="alert-circle" size={20} color="#FFFFFF" />
              </View>
              <View>
                <Text className={`font-medium text-${TextColor} `}>
                  Location Shared
                </Text>
                <Text className={`text-xs text- text-${GrayTextColor}`}>
                  10 min ago
                </Text>
              </View>
            </View>
            {/* Third Alert */}
            <View className="flex flex-row items-start gap-2">
              <View className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center">
                <Icon name="check" size={20} color="#FFFFFF" />
              </View>
              <View>
                <Text className={`  text-${TextColor}  font-medium`}>
                  Emergency Response Initiated
                </Text>
                <Text className={`text-xs text- text-${GrayTextColor}`}>
                  15 min ago
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Status Updates Card */}
        <View className=" mb-4">
          <Text className={`  text-${TextColor}  text-xl font-bold mb-2`}>
            Status Updates
          </Text>
          {/* Status Items */}
          <View className="space-y-2">
            {/* Status Update */}
            <View className="flex flex-row items-start gap-2">
              <View className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                <Icon name="run" size={20} color="#FFFFFF" />
              </View>
              <View>
                <Text className={`  text-${TextColor}  font-medium`}>
                  You are now Safe
                </Text>
                <Text className={`text-xs text- text-${GrayTextColor}`}>
                  20 min ago
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
export default HistoryTab;
