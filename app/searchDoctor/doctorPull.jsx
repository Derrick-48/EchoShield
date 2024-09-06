import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { useFetch } from "@/lib/fetch"; // Adjust the path according to your project structure

const DoctorDetailsScreen = ({ doctorId }) => {
  // Use the useFetch hook to fetch doctor data
  const {
    data: doctorData,
    loading,
    error,
  } = useFetch(`/(api)/(doctor)/${doctorId}`);

  // Show a loading indicator while fetching data
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  // Display error message if any
  if (error) {
    return <Text>Error: {error}</Text>;
  }

  // Render doctor details
  return (
    <View style={styles.container}>
      {doctorData ? (
        <>
          <Image source={{ uri: doctorData.imageUrl }} style={styles.image} />
          <Text style={styles.name}>{doctorData.name}</Text>
          <Text style={styles.specialization}>{doctorData.specialization}</Text>
          <Text style={styles.rating}>Rating: {doctorData.rating}</Text>
          <Text style={styles.experience}>
            Experience: {doctorData.experience} years
          </Text>
          <Text style={styles.bio}>{doctorData.bio}</Text>
          <Text style={styles.price}>
            Consultant Price: ${doctorData.consultantPrice}
          </Text>

          {/* Render Reviews */}
          <FlatList
            data={doctorData.reviews}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.review}>
                <Text>Reviewer: {item.reviewer}</Text>
                <Text>Rating: {item.rating}</Text>
                <Text>Comment: {item.comment}</Text>
              </View>
            )}
          />

          {/* Render Schedules */}
          <FlatList
            data={doctorData.schedules}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.schedule}>
                <Text>Date: {item.schedule_date}</Text>
                <Text>Time: {item.schedule_time}</Text>
              </View>
            )}
          />
        </>
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 24, fontWeight: "bold" },
  specialization: { fontSize: 18, color: "gray" },
  rating: { fontSize: 16 },
  experience: { fontSize: 16 },
  bio: { fontSize: 14, marginVertical: 10 },
  price: { fontSize: 16, fontWeight: "bold", color: "green" },
  review: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  schedule: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default DoctorDetailsScreen;
