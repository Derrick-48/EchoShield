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

  // Function to remove duplicate items based on a key
  const removeDuplicates = (items, key) => {
    const seen = new Set();
    return items.filter((item) => {
      const keyValue = item[key];
      const isDuplicate = seen.has(keyValue);
      seen.add(keyValue);
      return !isDuplicate;
    });
  };

  // Function to deduplicate data for each doctor
  const deduplicateData = (doctors) => {
    return doctors.map((doctor) => ({
      ...doctor,
      reviews: doctor.reviews
        ? removeDuplicates(doctor.reviews, "reviewer")
        : [],
      schedules: doctor.schedules
        ? removeDuplicates(doctor.schedules, "schedule_date")
        : [],
      availabilityschedules: doctor.availabilityschedules
        ? removeDuplicates(
            doctor.availabilityschedules,
            "availabilityscheduledate"
          )
        : [],
    }));
  };

  // Handle loading and error states
  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  if (error) return <Text>Error: {error}</Text>;

  // Deduplicate data if available
  const cleanedDoctorsData = doctorsData ? deduplicateData(doctorsData) : [];

  // Render doctor details
  return (
    <View style={styles.container}>
      {cleanedDoctorsData.length > 0 ? (
        <FlatList
          data={cleanedDoctorsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.doctorCard}>
              <Image
                source={{ uri: `${item.imageUrl}` }}
                style={styles.image}
              />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.specialization}>{item.specialization}</Text>
              <Text style={styles.experience}>
                Experience: {item.experience} years
              </Text>
              <Text style={styles.bio}>{item.bio}</Text>
              <Text style={styles.price}>
                Consultant Price: ${item.consultantPrice}
              </Text>
              <Text style={styles.location}>
                Location: {item.location.place}, {item.location.Country_State} -{" "}
                {item.location.Clinic_Hospital}
              </Text>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Reviews:</Text>
                {item.reviews.length > 0 ? (
                  item.reviews.map((review, index) => (
                    <View key={index} style={styles.review}>
                      <Text>Reviewer: {review.reviewer}</Text>
                      <Text>Rating: {review.rating}</Text>
                      <Text>Comment: {review.comment}</Text>
                      <Text>Days: {review.days}</Text>
                    </View>
                  ))
                ) : (
                  <Text>No reviews available</Text>
                )}
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Schedules:</Text>
                {item.schedules.length > 0 ? (
                  item.schedules.map((schedule, index) => (
                    <View key={index} style={styles.schedule}>
                      <Text>Date: {schedule.schedule_date}</Text>
                      <Text>Time: {schedule.schedule_time}</Text>
                      <Text>Status: {schedule.schedule_status}</Text>
                    </View>
                  ))
                ) : (
                  <Text>No schedules available</Text>
                )}
              </View>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Availability Schedules:</Text>
                {item.availabilityschedules &&
                item.availabilityschedules.length > 0 ? (
                  item.availabilityschedules.map((availability, index) => (
                    <View key={index} style={styles.availability}>
                      <Text>Date: {availability.availabilityscheduledate}</Text>
                      <Text>Time: {availability.availabilityscheduletime}</Text>
                    </View>
                  ))
                ) : (
                  <Text>No availability schedules available</Text>
                )}
              </View>
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
  experience: { fontSize: 16 },
  bio: { fontSize: 14, marginVertical: 10 },
  price: { fontSize: 16, fontWeight: "bold", color: "green" },
  location: { fontSize: 14, color: "blue" },
  section: { marginVertical: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
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
