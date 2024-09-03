// DoctorCard.js
import React from "react";
import { View, Text, Image } from "react-native";

const ReviewOverviewCard = ({ name, date, imageUri, UserRated, message }) => {
  return (
    <View className="flex-col bg-[#ffffff] rounded-xl p-5 mt-5 mb-5 mx-1.5  shadow-md">
      <View className="flex-row items-center p-1.5 mb-2.5">
        <Image
          source={{ uri: imageUri }}
          resizeMode="cover"
          className="w-[70px] h-[70px] rounded-full border border-white"
        />
        <View className=" ml-4">
          <View className="shadow-md elevation-5">
            <Text className="text-lg font-bold text-[#1e92ff]">{name}</Text>
          </View>
          <Text className="text-sm text-[#000000] font-JakartaSemiBold">
            {date}
          </Text>
        </View>
        <Text className="p-3 ">⭐ {UserRated}</Text>
      </View>
      <View className=" items-center mt-1 justify-evenly flex-1 ">
        <Text className="text-base font-medium text-[#000000]">{message}</Text>
      </View>
    </View>
  );
};

export default ReviewOverviewCard;
