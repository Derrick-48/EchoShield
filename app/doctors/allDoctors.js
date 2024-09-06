import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import { useFetch } from "@/lib/fetch"; // Adjust the path according to your project structure

const AllDoctorsScreen = () => {
  // Fetch all doctors data
  const {
    data: doctorsData,
    loading,
    error,
  } = useFetch(`/(api)/(allDoctors)/doctors`);

  // Show a loading indicator while fetching data
  if (loading)
    return (
      <View className="flex-1 justify-center items-center self-center justify-items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  // Display error message if any
  if (error) return <Text>Error: {error}</Text>;

  // Render doctor details
  return (
    <View style={styles.container}>
      {doctorsData ? (
        <FlatList
          data={doctorsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.doctorCard}>
              <Image
                source={{ uri: `${item.imageurl}` }}
                style={styles.image}
              />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.specialization}>{item.specialization}</Text>
              <Text style={styles.experience}>
                Experience: {item.experience} years
              </Text>
              <Text style={styles.bio}>{item.bio}</Text>
              <Text style={styles.price}>
                Consultant Price: ${item.consultantprice}
              </Text>
              <Text style={styles.location}>
                Location: {item.location.place}, {item.location.Country_State} -{" "}
                {item.location.Clinic_Hospital}
              </Text>
              <Text style={styles.location}>
                reviews: {item.reviews.reviewer}
              </Text>
            </View>
          )}
          ListEmptyComponent={() => <Text>No doctors available</Text>}
        />
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  doctorCard: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 24, fontWeight: "bold" },
  specialization: { fontSize: 18, color: "gray" },
  rating: { fontSize: 16 },
  experience: { fontSize: 16 },
  bio: { fontSize: 14, marginVertical: 10 },
  price: { fontSize: 16, fontWeight: "bold", color: "green" },
  location: { fontSize: 14, color: "blue" },
  review: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  schedule: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  availability: {
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default AllDoctorsScreen;
