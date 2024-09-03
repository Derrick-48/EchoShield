import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { doctors } from "@/constants/SymptomsData";
import HeaderCustom from "@/components/HeaderCustom";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons"; // or any other icon set from react-native-vector-icons
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

export default function DoctorDetailsScreen() {
  const { doctorId } = useLocalSearchParams(); // Extract the ID from the URL parameters
  const { isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";
  const statusBarStyle = isDarkTheme ? "light" : "dark";

  console.log("Doctor ID from route:", doctorId); // Debug log

  // Decode parameters if they were encoded
  const decodedId = decodeURIComponent(doctorId);

  // Find the doctor by name
  const doctor = doctors.find(
    (doc) => decodeURIComponent(doc.name) === decodedId
  );

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text>Doctor not found.</Text>
      </View>
    );
  } else {
    return (
      <>
        <View className="bg-white flex-1 pt-2 ">
          <View className="p-2 bg-orange-500 pb-5 ">
            <View className=" flex flex-row  justify-between">
              <TouchableOpacity className="p-2 ">
                <Icon
                  name={"chevron-back-outline"}
                  size={24}
                  color={TextColor}
                />
              </TouchableOpacity>
              <TouchableOpacity className="p-2 ">
                <Icon name={"ellipsis-vertical"} size={24} color={TextColor} />
              </TouchableOpacity>
            </View>

            <Image source={{ uri: doctor.imageUrl }} style={styles.image} />
            <Text style={styles.name}>{doctor.name}</Text>
            <View className="flex flex-row  justify-center">
              <Text style={styles.specialization}>{doctor.specialization}</Text>
              <Text style={styles.rating}> {doctor.rating} ⭐</Text>
            </View>
            <View className="flex flex-row  justify-center mt-3">
              <TouchableOpacity className="p-2 rounded-full bg-white mx-1 ">
                <Icon name={"call"} size={24} color={TextColor} />
              </TouchableOpacity>

              <TouchableOpacity className="p-2 rounded-full bg-white  mx-3 ">
                <Icon
                  name={"chatbubble-ellipses-sharp"}
                  size={24}
                  color={TextColor}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView className="pt-3 bg-white ">
            <Text className="font-JakartaBold text-lg pl-3"> About Doctor</Text>
            <View className="p-4 bg-white mb-3 pb-5   ">
              <Text style={styles.experience}>
                Experience: {doctor.experience}
              </Text>
              <Text style={styles.contact}>Contact: {doctor.contact}</Text>
              <Text className="text-sm mt-2.5 text-left font-medium">
                {doctor.bio}
              </Text>

              <View style={styles.reviewsContainer}>
                <Text style={styles.reviewsTitle}>Reviews:</Text>
                {doctor.reviews.map((review, index) => (
                  <View key={index} style={styles.review}>
                    <Text style={styles.reviewer}>{review.reviewer}:</Text>
                    <Text style={styles.reviewRating}> {review.rating} ⭐</Text>
                    <Text style={styles.reviewComment}>
                      {" "}
                      - {review.comment}
                    </Text>
                  </View>
                ))}
              </View>

              <Text style={styles.location}>Location: {doctor.location}</Text>
            </View>
          </ScrollView>

          <View className="h-1 bg-gray-200  w-full" />

          <View className="mb-5 p-2 ">
            <View className=" mb-2 flex-row justify-between mt-2">
              <Text className="text-sm font-JakartaBold  p-2">
                Consultation Price:
              </Text>
              <Text className="text-sm font-JakartaBold  p-2">
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
    alignSelf: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  specialization: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
    marginTop: 10,
  },
  rating: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 12,
  },
  experience: {
    fontSize: 16,
  },
  contact: {
    fontSize: 16,
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "left",
  },
  reviewsContainer: {
    marginTop: 20,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  review: {
    marginBottom: 10,
  },
  reviewer: {
    fontWeight: "bold",
  },
  reviewRating: {
    color: "orange",
  },
  reviewComment: {
    color: "gray",
  },
  location: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
