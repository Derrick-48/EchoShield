// Import necessary components and libraries
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/Context/ThemeContext";
import { imageDataURL } from "@/constants/ImageData";

// Define the HomeTabScreen component
const HomeTabScreen = () => {
  // Get the current theme from the ThemeContext
  const { isDarkTheme } = useTheme();

  // Define colors based on the current theme

  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const NearCardBgColor = isDarkTheme ? "#FBBF00" : "#ffff";
  const PoliceNearCardBgColor = isDarkTheme ? "#00BFA6" : "#ffff";
  const MedNearCardBgColor = isDarkTheme ? "#FF4500" : "#000000";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const InverseTextColor = isDarkTheme ? "#000000" : "#ffffff";
  const SameTextColor = isDarkTheme ? "#ffffff" : "#ffffff";
  const IconColor = isDarkTheme ? "#ffffff" : "#000000";
  const SecondIconColor = isDarkTheme ? "#0066FF" : "#ffffff";
  const ThirdTextColor = isDarkTheme ? "#ffffff" : "#0066FF";
  const FourTextColor = isDarkTheme ? "#ffffff" : "#6B7280";
  const FifthTextColor = isDarkTheme ? "#000000" : "#6B7280";
  const SecondTextColor = isDarkTheme ? "#ffffff" : "#FBBF24";
  const TextInputColor = isDarkTheme ? "#ffffff" : "#6B7280";
  const statusBarStyle = isDarkTheme ? "light" : "dark";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";

  // Add event listeners for keyboard show and hide events
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        // Custom logic when the keyboard appears
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        // Custom logic when the keyboard disappears
      }
    );

    // Cleanup the listeners on component unmount
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Render the component
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            styles.MainContainer,
            { backgroundColor: ScreenBackgroundColor },
          ]}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={[styles.greetingText, { color: TextColor }]}>
              Hello,
            </Text>
            <Text style={[styles.greetingName, { color: TextColor }]}>
              Hi James
            </Text>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.MainContainer}
            keyboardVerticalOffset={90} // Adjust this value as needed
          >
            <ScrollView>
              {/* Doctor Overview Card */}
              <View style={styles.doctorOverviewCard}>
                <View style={styles.doctorCard}>
                  <Image
                    source={{ uri: "https://via.placeholder.com/50" }}
                    style={styles.doctorImage}
                  />
                  <View style={styles.doctorInfo}>
                    <Text style={[styles.doctorName, { color: SameTextColor }]}>
                      Dr. Imran Syahir
                    </Text>
                    <Text style={[styles.doctorRole, { color: SameTextColor }]}>
                      General Doctor
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.arrowIcon}>
                    <FontAwesome
                      name="chevron-right"
                      size={20}
                      color={SameTextColor}
                    />
                  </TouchableOpacity>
                </View>
                {/* Separator Line */}
                <View style={styles.separatorLine} />
                <View style={styles.doctorSchedule}>
                  <MaterialIcons
                    name="date-range"
                    size={16}
                    color={IconColor}
                  />
                  <Text style={[styles.scheduleText, { color: SameTextColor }]}>
                    Sunday, 12 June
                  </Text>
                  <MaterialIcons
                    name="access-time"
                    size={16}
                    color={IconColor}
                  />
                  <Text style={[styles.scheduleText, { color: SameTextColor }]}>
                    11:00 - 12:00 AM
                  </Text>
                </View>
              </View>

              {/* Search Bar */}
              <View
                style={[styles.searchBar, { backgroundColor: TextInputColor }]}
              >
                <FontAwesome
                  name="search"
                  size={25}
                  color={SecondIconColor}
                  style={styles.searchIcon}
                />
                <TextInput
                  style={[
                    styles.searchInput,
                    { backgroundColor: TextInputColor },
                  ]}
                  placeholder="Search doctor or health issue"
                  placeholderTextColor={InverseTextColor}
                />
              </View>

              {/* Category Icons */}
              <View style={styles.categories}>
                {["building-o", "user-md", "medkit", "hospital-o"].map(
                  (icon, index) => (
                    <View key={index} style={styles.categoryButton}>
                      <TouchableOpacity
                        style={[
                          styles.iconContainer,
                          { backgroundColor: IconBackgroundColor },
                        ]}
                      >
                        <FontAwesome name={icon} size={20} color={IconColor} />
                      </TouchableOpacity>
                      <Text style={[styles.categoryText, { color: TextColor }]}>
                        {["Police", "Doctor", "Medicine", "Hospital"][index]}
                      </Text>
                    </View>
                  )
                )}
              </View>
              {/* Nearby Doctor Card */}
              <View style={styles.header}>
                <Text style={[styles.greetingName, { color: TextColor }]}>
                  Near Doctor
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={[
                    styles.nearDoctorCardContainer,
                    { backgroundColor: NearCardBgColor },
                  ]}
                >
                  <View style={styles.nearDoctorCard}>
                    <Image
                      source={{ uri: imageDataURL[0] }}
                      style={styles.nearDoctorImage}
                    />
                    <View style={styles.nearDoctorInfo}>
                      <Text style={styles.nearDoctorName}>
                        Dr. Joseph Brostito
                      </Text>
                      <Text
                        style={[
                          styles.nearDoctorRole,
                          { color: FourTextColor, fontWeight: "600" },
                        ]}
                      >
                        Dental Specialist
                      </Text>
                      <View style={styles.nearDoctorDetailsContainer}>
                        <View style={styles.nearDoctorDetails}>
                          <MaterialIcons
                            name="location-on"
                            size={22}
                            color={FifthTextColor}
                          />
                          <Text
                            style={[
                              styles.distanceText,
                              {
                                color: FifthTextColor,
                                fontWeight: "600",
                                fontSize: 15,
                              },
                            ]}
                          >
                            {" "}
                            1.2 Km
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* Separator Line */}
                  <View style={styles.separatorLine} />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <FontAwesome name="star" size={20} color={FifthTextColor} />
                    <Text
                      style={[
                        styles.ratingText,
                        {
                          color: FifthTextColor,
                          fontWeight: "600",
                          paddingRight: 5,
                        },
                      ]}
                    >
                      {"  "} 4.8 (120 Reviews)
                    </Text>
                    <MaterialIcons
                      name="access-time"
                      size={20}
                      color={ThirdTextColor}
                    />
                    <Text
                      style={[
                        styles.availabilityText,
                        {
                          color: ThirdTextColor,
                          fontWeight: "600",
                          paddingRight: 5,
                        },
                      ]}
                    >
                      {"   "}
                      Open at 17:00
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.header}>
                <Text style={[styles.greetingName, { color: TextColor }]}>
                  Near Police Station
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={[
                    styles.nearDoctorCardContainer,
                    { backgroundColor: PoliceNearCardBgColor },
                  ]}
                >
                  <View style={styles.nearDoctorCard}>
                    <Image
                      source={{ uri: imageDataURL[2] }}
                      style={styles.nearDoctorImage}
                    />
                    <View style={styles.nearDoctorInfo}>
                      <Text style={styles.nearDoctorName}>
                        Prestea Police Station
                      </Text>
                      <Text
                        style={[
                          styles.nearDoctorRole,
                          { color: FourTextColor, fontWeight: "600" },
                        ]}
                      >
                        Near Urban Council
                      </Text>
                      <View style={styles.nearDoctorDetailsContainer}>
                        <View style={styles.nearDoctorDetails}>
                          <MaterialIcons
                            name="location-on"
                            size={22}
                            color={FifthTextColor}
                          />
                          <Text
                            style={[
                              styles.distanceText,
                              {
                                color: FifthTextColor,
                                fontWeight: "600",
                                fontSize: 15,
                              },
                            ]}
                          >
                            {" "}
                            1.2 Km
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* Separator Line */}
                  <View style={styles.separatorLine} />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="police-station"
                      size={20}
                      color={FifthTextColor}
                    />
                    <Text
                      style={[
                        styles.ratingText,
                        {
                          color: FifthTextColor,
                          fontWeight: "600",
                          paddingRight: 5,
                        },
                      ]}
                    >
                      {"  "} 4.8 (120 Reviews)
                    </Text>
                    <MaterialIcons
                      name="access-time"
                      size={20}
                      color={ThirdTextColor}
                    />
                    <Text
                      style={[
                        styles.availabilityText,
                        {
                          color: ThirdTextColor,
                          fontWeight: "700",
                          paddingRight: 5,
                        },
                      ]}
                    >
                      {"   "}
                      Open at 24/7
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.header}>
                <Text style={[styles.greetingName, { color: TextColor }]}>
                  Nearby Hospital
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={[
                    styles.nearDoctorCardContainer,
                    { backgroundColor: MedNearCardBgColor },
                  ]}
                >
                  <View style={styles.nearDoctorCard}>
                    <Image
                      source={{ uri: imageDataURL[4] }}
                      style={styles.nearDoctorImage}
                    />
                    <View style={styles.nearDoctorInfo}>
                      <Text style={styles.nearDoctorName}>
                        Prestea Medical Hospital
                      </Text>
                      <Text
                        style={[
                          styles.nearDoctorRole,
                          { color: FourTextColor, fontWeight: "600" },
                        ]}
                      >
                        Near The Fuel Station
                      </Text>
                      <View style={styles.nearDoctorDetailsContainer}>
                        <View style={styles.nearDoctorDetails}>
                          <MaterialIcons
                            name="location-on"
                            size={22}
                            color={FifthTextColor}
                          />
                          <Text
                            style={[
                              styles.distanceText,
                              {
                                color: FifthTextColor,
                                fontWeight: "600",
                                fontSize: 15,
                              },
                            ]}
                          >
                            {" "}
                            1.2 Km
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* Separator Line */}
                  <View style={styles.separatorLine} />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="police-station"
                      size={20}
                      color={FifthTextColor}
                    />
                    <Text
                      style={[
                        styles.ratingText,
                        {
                          color: FifthTextColor,
                          fontWeight: "600",
                          paddingRight: 5,
                        },
                      ]}
                    >
                      {"  "} 4.8 (120 Reviews)
                    </Text>
                    <MaterialIcons
                      name="access-time"
                      size={20}
                      color={ThirdTextColor}
                    />
                    <Text
                      style={[
                        styles.availabilityText,
                        {
                          color: ThirdTextColor,
                          fontWeight: "700",
                          paddingRight: 5,
                        },
                      ]}
                    >
                      {"   "}
                      Open at 24/7
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
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
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  nearDoctorCardContainer: {
    flexDirection: "column",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  nearDoctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
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
  },
  nearDoctorDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
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
