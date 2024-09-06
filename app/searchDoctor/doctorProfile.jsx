import { imageDataURL } from "@/constants/ImageData";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "react-native-vector-icons";

const DoctorProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-900 ">
      <StatusBar style="light" />

      {/* Header Section */}
      <View className="flex-row  items-center justify-around py-6 mb-6 ">
        <TouchableOpacity
          className=" border-2 rounded-full  w-10 h-10 items-center justify-center bg-white"
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} className="text-black " />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-white ">Doctor Profile</Text>
        <View />
      </View>

      {/* Doctor Information */}
      <View
        style={styles.bottomSection}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View className="flex-row items-center p-4  ml-6 ">
          <View
            style={{
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 10,
              // Android shadow (elevation)
              elevation: 5,
            }}
          >
            <Image
              source={{ uri: imageDataURL[1] }} // Replace with actual image URL
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                borderWidth: 3,
                borderColor: "black",
              }}
            />
          </View>

          <View className="ml-4">
            <Text className="text-2xl font-bold text-black">
              Dr. Leonard C.
              <MaterialIcons
                name="verified"
                size={16}
                className="text-purple-600 ml-1"
              />
            </Text>
            <View className="flex-row items-center">
              <Text className="text-base text-gray-500">Cardiologist</Text>
            </View>
          </View>
        </View>
        {/* separator */}
        <View className="h-0.5 bg-gray-200 w-full" />
        {/* Appointment Section */}
        <View className="p-4">
          <Text className="text-lg font-semibold text-black text-left">
            Book an appointment
          </Text>

          <View className="flex-row items-center  py-2 p-6 justify-between ">
            <TouchableOpacity className=" border-2 rounded-full  w-10 h-10 items-center justify-center">
              <FontAwesome
                name="chevron-left"
                size={16}
                className="text-black"
              />
            </TouchableOpacity>
            <View className=" flex-col  items-center">
              <FontAwesome
                name="calendar"
                size={24}
                className="text-purple-700 mb-3"
              />

              <Text className="text-base font-JakartaSemiBold text-black">
                Today, 26 November
              </Text>
            </View>

            <TouchableOpacity className=" border-2 rounded-full  w-10 h-10 items-center justify-center">
              <FontAwesome
                name="chevron-right"
                size={16}
                className="text-black"
              />
            </TouchableOpacity>
          </View>

          {/* Time Slots */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex-row gap-3  p-1"
          >
            {["08:30am", "10:30am", "2:00pm", "2:30pm"].map((time) => (
              <TouchableOpacity
                key={time}
                className="bg-purple-100 rounded-full px-4 py-2"
              >
                <Text className="text-sm text-purple-600 font-JakartaBold">
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* separator */}
        <View className="h-0.5 bg-gray-200 w-full" />
        {/* Patient Reviews Section */}

        <View className="p-8">
          <Text className="text-xl mb-2 font-JakartaBold text-black">
            Patient Reviews
          </Text>
          <View className=" ">
            <Text className="text-sm text-gray-500 font-JakartaBold  ">
              98% of patients recommend Dr. Leonard Campbell, based on 82
              reviews.
            </Text>
          </View>

          {/* Rating Display */}
          <View className="flex-row items-center mt-4 ">
            {/* Circular Rating */}
            <View className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center">
              <Text className="text-white font-bold">4.9</Text>
              <Text className="text-white text-xs">of 5</Text>
            </View>

            {/* Star Ratings */}
            <View className="ml-4  flex-1 mr-4">
              {[
                { star: "5 star", percentage: "98%" },
                { star: "4 star", percentage: "2%" },
                { star: "3 star", percentage: "0%" },
                { star: "2 star", percentage: "0%" },
                { star: "1 star", percentage: "0%" },
              ].map((rating) => (
                <View key={rating.star} className="flex-row  items-center my-1">
                  <Text className="text-xs text-black">{rating.star}</Text>
                  <View className="w-28  bg-gray-200 h-2 mx-2 rounded-full">
                    <View
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: rating.percentage }}
                    />
                  </View>
                  <Text className="text-xs text-black">
                    {rating.percentage}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorProfileScreen;
const styles = StyleSheet.create({
  bottomSection: {
    backgroundColor: "#ffffff", // White background
    borderTopLeftRadius: 40, // Rounded top-left corner
    borderTopRightRadius: 40, // Rounded top-right corner
    marginTop: -15, // Negative margin to overlap with the blue background
    flexGrow: 1, // Allows the ScrollView to expand
    paddingTop: 10,
  },
});
