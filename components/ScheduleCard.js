import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { imageDataURL } from "@/constants/ImageData";
import { ScrollView } from "react-native-gesture-handler";

const ScheduleOverviewCard = ({
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
      className="flex-col bg-white rounded-xl p-2 mb-5 mx-1   "
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View className="flex-row mb-2 p-1.5 items-center">
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
        <Text className={`text-sm font-medium ${textColor}`}>
          {scheduleDate}
        </Text>
        <MaterialIcons name="access-time" size={20} color={iconColor} />
        <Text className={`text-sm font-medium ${textColor}`}>
          {scheduleTime}
        </Text>
        <View className="flex-row items-center">
          <FontAwesome name="dot-circle-o" size={20} color="black" />
          <Text className="mt-0.5 text-sm font-medium  "> Confirmed</Text>
        </View>
      </View>
      <View className="flex flex-row justify-center mt-4">
        <TouchableOpacity className="bg-slate-950  rounded-lg w-32 h-10 justify-center">
          <Text className="text-sm font-bold text-center text-white">
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-slate-950 rounded-lg w-40 h-10 justify-center ml-3">
          <Text className="text-xs font-bold text-center text-white">
            Change Schedule
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScheduleOverviewCard;
