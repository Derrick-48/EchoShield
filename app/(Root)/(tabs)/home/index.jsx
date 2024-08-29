import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const HomeTabScreen = () => {
  const { isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const statusBarStyle = isDarkTheme ? "light" : "dark";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";

  return (
    <>
      <View
        style={[
          styles.MainContainer,
          { backgroundColor: ScreenBackgroundColor },
        ]}
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.greetingName}>Hi James</Text>
          </View>

          <View style={styles.doctorOverviewCard}>
            <View style={styles.doctorCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/50" }}
                style={styles.doctorImage}
              />
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>Dr. Imran Syahir</Text>
                <Text style={styles.doctorRole}>General Doctor</Text>
              </View>

              <TouchableOpacity style={styles.arrowIcon}>
                <FontAwesome name="chevron-right" size={20} color="#3B82F6" />
              </TouchableOpacity>
            </View>
            {/* Separator Line */}
            <View style={styles.separatorLine} />
            <View style={styles.doctorSchedule}>
              <MaterialIcons name="date-range" size={16} color="#6B7280" />
              <Text style={styles.scheduleText}>Sunday, 12 June</Text>
              <MaterialIcons name="access-time" size={16} color="#6B7280" />
              <Text style={styles.scheduleText}>11:00 - 12:00 AM</Text>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchBar}>
            <FontAwesome
              name="search"
              size={25}
              color="#9CA3AF"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search doctor or health issue"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Category Icons */}
          <View style={styles.categories}>
            {["snowflake-o", "user-md", "medkit", "hospital-o"].map(
              (icon, index) => (
                <View key={index} style={styles.categoryButton}>
                  <TouchableOpacity
                    style={[
                      styles.iconContainer,
                      { backgroundColor: IconBackgroundColor },
                    ]}
                  >
                    <FontAwesome name={icon} size={20} color="#3B82F6" />
                  </TouchableOpacity>
                  <Text style={styles.categoryText}>
                    {["Covid 19", "Doctor", "Medicine", "Hospital"][index]}
                  </Text>
                </View>
              )
            )}
          </View>

          {/* Nearby Doctor Card */}
          <View style={styles.nearDoctorCard}>
            <Image
              source={{ uri: "https://via.placeholder.com/40" }}
              style={styles.nearDoctorImage}
            />
            <View style={styles.nearDoctorInfo}>
              <Text style={styles.nearDoctorName}>Dr. Joseph Brostito</Text>
              <Text style={styles.nearDoctorRole}>Dental Specialist</Text>
              <View style={styles.nearDoctorDetails}>
                <Text style={styles.distanceText}>
                  <MaterialIcons name="location-on" size={14} color="#6B7280" />{" "}
                  1.2 KM
                </Text>
              </View>
              <Text style={styles.ratingText}>
                <FontAwesome name="star" size={14} color="#FBBF24" /> 4.8 (120
                Reviews)
              </Text>
              <Text style={styles.availabilityText}>
                <MaterialIcons name="access-time" size={14} color="#3B82F6" />{" "}
                Open at 17:00
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  MainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
    color: "#6B7280",
  },
  greetingName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
  },
  profileIcon: {
    marginLeft: "auto",
  },
  doctorCard: {
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  doctorOverviewCard: {
    flexDirection: "column",
    backgroundColor: "#0066FF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
  },
  doctorRole: {
    fontSize: 14,
    color: "#6B7280",
  },
  doctorSchedule: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-evenly",
  },
  scheduleText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6B7280",
  },
  arrowIcon: {
    padding: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8, // Space between the icon and the text input
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    padding: 20,
    color: "#1F2937",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  categoryButton: {
    alignItems: "center",
  },
  iconContainer: {
    padding: 20,
    borderRadius: 40, // Adjust the size if needed to fit the icon
    marginBottom: 5, // Adds space between the icon and the text
  },
  categoryText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600",
  },
  nearDoctorCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  nearDoctorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nearDoctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  nearDoctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
  },
  nearDoctorRole: {
    fontSize: 14,
    color: "#6B7280",
  },
  nearDoctorDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  distanceText: {
    fontSize: 12,
    color: "#6B7280",
    marginRight: 10,
  },
  ratingText: {
    fontSize: 12,
    color: "#FBBF24",
    marginRight: 10,
  },
  availabilityText: {
    fontSize: 12,
    color: "#3B82F6",
  },
  separatorLine: {
    height: 1, // Line height
    backgroundColor: "#E5E7EB", // Line color, adjust as needed
    marginVertical: 5, // Space above and below the line
    width: "100%", // Make it full width to match the container
  },
});

export default HomeTabScreen;
