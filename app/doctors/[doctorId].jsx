import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Link, router, useLocalSearchParams } from "expo-router";
import { doctors } from "@/constants/SymptomsData";
import HeaderCustom from "@/components/HeaderCustom";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons"; // or any other icon set from react-native-vector-icons
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import ReviewOverviewCard from "@/components/ReviewCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import CallButton from "@/components/CallActionButton";

export default function DoctorDetailsScreen() {
  const { doctorId } = useLocalSearchParams(); // Extract the ID from the URL parameters
  const { isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const IconColor = isDarkTheme ? "#000000" : "#000000";
  const IconColortwo = isDarkTheme ? "#000000" : "#000000";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";
  const statusBarStyle = isDarkTheme ? "light" : "dark";

  console.log("Doctor ID from route:", doctorId); // Debug log

  // Decode parameters if they were encoded
  const decodedId = decodeURIComponent(doctorId);

  // Find the doctor by name
  const doctor = doctors.find(
    (doc) => decodeURIComponent(doc.name) === decodedId
  );

  const numberOfReviews = doctor.reviews.length;
  // Calculate the average rating
  const totalRating = doctor.reviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  const averageRating = (totalRating / numberOfReviews).toFixed(1); // Rounded to one decimal place

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text>Doctor not found.</Text>
      </View>
    );
  } else {
    return (
      <>
        <View className="bg-white flex-1 ">
          <View className="p-2 bg-[#0286FF] pb-5 pt-12 ">
            <View className=" flex flex-row  justify-between">
              <TouchableOpacity className="p-2 " onPress={() => router.back()}>
                <Icon
                  name={"chevron-back-outline"}
                  size={24}
                  color={IconColor}
                />
              </TouchableOpacity>
              <TouchableOpacity className="p-2 ">
                <Icon name={"ellipsis-vertical"} size={24} color={IconColor} />
              </TouchableOpacity>
            </View>

            <Image
              source={{ uri: doctor.imageUrl }}
              className="w-24 h-24 rounded-full self-center"
            />
            <Text className="text-2xl font-bold text-center mt-5 text-white">
              {doctor.name}
            </Text>
            <View className="flex flex-row  justify-center">
              <Text className="text-lg text-white font-JakartaSemiBold  text-center mt-2.5">
                {doctor.specialization}
                {"     "}
              </Text>
              <Text className="text-base text-center mt-3.5 font-JakartaBold text-white">
                {doctor.rating} ⭐
              </Text>
            </View>
            <View className="flex flex-row  justify-center mt-3">
              <CallButton phoneNumber={doctor.contact} />

              <TouchableOpacity className="p-2 rounded-full bg-white  mx-3 ">
                <Icon
                  name={"chatbubble-ellipses-sharp"}
                  size={24}
                  color={IconColor}
                />
              </TouchableOpacity>
            </View>
            <View className=" bg-black rounded-3xl w-full h-14 absolute  " />
          </View>

          <ScrollView className="pt-3 ">
            <Text className="font-JakartaBold text-lg pl-3"> About Doctor</Text>
            <View className=" bg-white mb-3 pb-5   ">
              <Text className="text-base pl-4 font-JakartaSemiBold ">
                Experience: {doctor.experience}
              </Text>
              <Text className="text-sm text-left font-medium text-gray-500 pl-4 pt-1">
                {doctor.bio}
              </Text>

              <View className="mt-5">
                <View className="flex flex-row justify-between">
                  <View className="flex flex-row">
                    <Text className="text-lg font-bold mb-2.5 pl-3">
                      Reviews:{" "}
                    </Text>
                    <Text className="pr-1 text-lg font-JakartaBold">
                      ⭐{averageRating}
                    </Text>
                    <Text className=" text-lg font-JakartaBold text-cyan-600">
                      ( {numberOfReviews} )
                    </Text>
                  </View>
                  <Link href={"/(Root)"} asChild>
                    <TouchableOpacity>
                      <Text className="text-lg font-bold mb-2.5 pr-4 text-blue-700">
                        See all
                      </Text>
                    </TouchableOpacity>
                  </Link>
                </View>

                <ScrollView horizontal>
                  {doctor.reviews.map((review, index) => (
                    <ReviewOverviewCard
                      key={index}
                      name={review.reviewer}
                      date={review.days}
                      UserRated={review.rating}
                      message={review.comment}
                      imageUri={review.reviewer_image}
                    />
                  ))}
                </ScrollView>
              </View>

              <Text className="text-base mt-2.5 pl-3 font-JakartaBold">
                Location:
              </Text>

              <View className="flex flex-row mt-4 pl-8 items-center  ">
                <TouchableOpacity className="rounded-full bg-slate-300 w-14 h-14 justify-center items-center">
                  <Ionicons name="location" size={30} color="black" />
                </TouchableOpacity>
                <View>
                  <View className="flex flex-row">
                    <Text className="text-base  pl-3 font-JakartaSemiBold">
                      {doctor.location.Country_State}
                    </Text>
                    <Text className="text-base  pl-2 font-JakartaSemiBold">
                      {doctor.location.Clinic_Hospital}
                    </Text>
                  </View>

                  <Text className="text-base  pl-3">
                    {doctor.location.place}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>

          <View className="h-1 bg-gray-200  w-full" />

          <View className="mb-5 p-2 ">
            <View className=" mb-2 flex-row justify-between mt-2">
              <Text className="text-sm font-JakartaBold  p-2">
                Consultation Price:
              </Text>
              <Text className="text-base font-JakartaBold  p-2 text-blue-700">
                {doctor.consultantPrice}
              </Text>
            </View>
            <CustomButton
              title={"Book Appointment"}
              onPress={() =>
                Alert.alert(`You Have Book Appointment with ${doctor.name}`)
              }
            />
          </View>
        </View>
      </>
    );
  }
}
