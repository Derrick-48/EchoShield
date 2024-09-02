import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { doctors } from "@/constants/SymptomsData";

export default function DoctorDetailsScreen() {
  const { doctorId } = useLocalSearchParams(); // Extract the ID from the URL parameters

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
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: doctor.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialization}>{doctor.specialization}</Text>
        <Text style={styles.rating}>Rating: {doctor.rating} ⭐</Text>
        <Text style={styles.experience}>Experience: {doctor.experience}</Text>
        <Text style={styles.contact}>Contact: {doctor.contact}</Text>
        <Text style={styles.bio}>{doctor.bio}</Text>

        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewsTitle}>Reviews:</Text>
          {doctor.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <Text style={styles.reviewer}>{review.reviewer}:</Text>
              <Text style={styles.reviewRating}> {review.rating} ⭐</Text>
              <Text style={styles.reviewComment}> - {review.comment}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.location}>Location: {doctor.location}</Text>
        <Text style={styles.price}>
          Consultation Price: {doctor.consultantPrice}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
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
    marginTop: 10,
  },
  experience: {
    fontSize: 16,
    marginTop: 10,
  },
  contact: {
    fontSize: 16,
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
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
    marginTop: 10,
    fontWeight: "bold",
  },
});
