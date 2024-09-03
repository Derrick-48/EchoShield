// DoctorCard.js
import React from "react";
import { View, Text, Image } from "react-native";

const ReviewOverviewCard = ({ name, date, imageUri, UserRated, message }) => {
  return (
    <View className="flex-col bg-[#0066FF] rounded-xl p-5 mb-5 mx-1.5">
      <View className="flex-row items-center p-1.5 mb-2.5">
        <Image
          source={{ uri: imageUri }}
          resizeMode="cover"
          className="w-[70px] h-[70px] rounded-full border border-white"
        />
        <View className="flex-1 ml-4">
          <View className="shadow-md elevation-5">
            <Text className="text-lg font-bold text-[#ffffff]">{name}</Text>
          </View>
          <Text className="text-sm text-white">{date}</Text>
        </View>
        <Text className="p-3">⭐ {UserRated}</Text>
      </View>
      <View className=" items-center mt-1 justify-evenly ">
        <Text className="text-base font-medium text-white">{message}</Text>
      </View>
    </View>
  );
};

export default ReviewOverviewCard;
