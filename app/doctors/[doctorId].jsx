import React from "react";
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
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import ReviewOverviewCard from "@/components/ReviewCard";
import Ionicons from "@expo/vector-icons/Ionicons";
import CallButton from "@/components/CallActionButton";
import { StatusBar } from "expo-status-bar";

export default function DoctorDetailsScreen() {
  const { doctorId } = useLocalSearchParams();
  const { isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const IconColor = isDarkTheme ? "#ffffff" : "#ffffff";
  const IconColorTwo = isDarkTheme ? "#000000" : "#000000";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";
  const statusBarStyle = isDarkTheme ? "light" : "light";

  const decodedId = decodeURIComponent(doctorId);
  const doctor = doctors.find(
    (doc) => decodeURIComponent(doc.name) === decodedId
  );

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text>Doctor not found.</Text>
      </View>
    );
  }

  const numberOfReviews = doctor.reviews.length;
  const totalRating = doctor.reviews.reduce(
    (acc, review) => acc + review.rating,
    0
  );
  const averageRating = (totalRating / numberOfReviews).toFixed(1);

  return (
    <>
      <StatusBar style={statusBarStyle} />
      <View className="flex-1 ">
        {/* Top section with blue background */}
        <View className="p-2 bg-[#0286FF] pb-5 pt-12 ">
          <View className="flex flex-row justify-between">
            <TouchableOpacity className="p-2" onPress={() => router.back()}>
              <Icon name={"chevron-back-outline"} size={24} color={IconColor} />
            </TouchableOpacity>
            <TouchableOpacity className="p-2">
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
          <View className="flex flex-row justify-center">
            <Text className="text-lg text-white font-JakartaSemiBold text-center mt-2.5">
              {doctor.specialization}{" "}
            </Text>
            <Text className="text-base text-center mt-3.5 font-JakartaBold text-white">
              {doctor.rating} ⭐
            </Text>
          </View>
          <View className="flex flex-row justify-center mt-3 mb-5">
            <CallButton phoneNumber={doctor.contact} />
            <TouchableOpacity className="p-2 rounded-full bg-white mx-3">
              <Icon
                name={"chatbubble-ellipses-sharp"}
                size={24}
                color={IconColorTwo}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom section with white background and rounded corners */}

        <ScrollView
          style={styles.bottomSection}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text className="font-JakartaBold text-lg pl-3"> About Doctor</Text>
          {/* Content of the ScrollView */}
          <View className="bg-white mb-3 pb-5">
            <Text className="text-base pl-4 font-JakartaSemiBold">
              Experience: {doctor.experience}
            </Text>
            <Text className="text-sm text-left font-medium text-gray-500 pl-4 pt-1">
              {doctor.bio}
            </Text>
            {/* Other components like Reviews and Location */}
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
          </View>
          <Text className="text-base  pl-3 font-JakartaBold">Location:</Text>
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
              <Text className="text-base  pl-3">{doctor.location.place}</Text>
            </View>
          </View>
        </ScrollView>

        <View className="h-1 bg-gray-200 w-full" />

        <View className="mb-5 p-2 bg-white">
          <View className="mb-1 flex-row justify-between mt-2">
            <Text className="text-sm font-JakartaBold p-1">
              Consultation Price:
            </Text>
            <Text className="text-base font-JakartaBold p-1 text-blue-700">
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

const styles = StyleSheet.create({
  bottomSection: {
    backgroundColor: "#ffffff", // White background
    borderTopLeftRadius: 20, // Rounded top-left corner
    borderTopRightRadius: 20, // Rounded top-right corner
    marginTop: -15, // Negative margin to overlap with the blue background
    flexGrow: 1, // Allows the ScrollView to expand
    paddingTop: 10,
  },
});
