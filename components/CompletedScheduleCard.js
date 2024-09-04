import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const CompletedScheduleOverviewCard = ({
  name,
  specialization,
  imageUri,
  scheduleDate,
  scheduleTime,
  textColor,
  iconColor,
}) => {
  return (
    <View
      className="flex-col bg-white rounded-xl p-5 mb-5 mx-1   "
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View className="flex-row items-center">
        <View className="flex-1 ml-4">
          <View className="shadow-lg">
            <Text className={`text-lg font-bold ${textColor}`}>{name}</Text>
          </View>
          <Text className={`text-base ${textColor}`}>{specialization}</Text>
        </View>

        <Image
          source={{ uri: imageUri }}
          className="w-16 h-16 rounded-full border  border-white"
        />
      </View>
      {/* Separator Line */}
      <View className="h-0.5 bg-gray-200 my-2 w-full" />
      <View className="flex-row items-center mt-1 justify-evenly">
        <MaterialIcons name="date-range" size={20} color={iconColor} />
        <Text className={`text-xs font-medium ${textColor}`}>
          {"  "} {scheduleDate} {"  "}
        </Text>
        <MaterialIcons name="access-time" size={20} color={iconColor} />
        <Text className={`text-xs font-medium ${textColor}`}>
          {"  "} {scheduleTime} {"  "}
        </Text>
        <View className="flex-row items-center mr-3">
          <FontAwesome name="dot-circle-o" size={20} color="black" style={{}} />
          <Text className="-mt-0.5 text-xs font-medium"> Completed</Text>
        </View>
      </View>
    </View>
  );
};

export default CompletedScheduleOverviewCard;
