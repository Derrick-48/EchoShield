// Import necessary components and libraries
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/Context/ThemeContext";
import { imageDataURL } from "@/constants/ImageData";
import HomeStyle from "@/Styles_Theme/HomeScreenStyle";
import NearbyCard from "@/components/NearbyCard";
import ResponseOverviewCard from "@/components/ResponseCard";
import { doctors as InitialDoctorsData } from "@/constants/data";
import {
  nearbyDoctorsData as DummyNearbyDoctorsData,
  nearbyHospitalsData as DummyNearbyHospitalsData,
  nearbyPoliceData as DummyNearbyPoliceData,
} from "@/constants/data";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";

// Define the HomeTabScreen component
const HomeTabScreen = () => {
  // Get the current theme from the ThemeContext
  const { isDarkTheme } = useTheme();
  const [doctors, setDoctors] = useState(InitialDoctorsData); // State to store the fetched doctors
  const [nearbyDoctors, setNearbyDoctors] = useState(DummyNearbyDoctorsData);
  const [nearbyHospitals, setNearbyHospitals] = useState(
    DummyNearbyHospitalsData
  );
  const [nearbyPolice, setNearbyPolice] = useState(DummyNearbyPoliceData);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false); // State for the refreshing indicator
  const { user } = useUser(); // Get the current user from the Clerk context

  // Function to handle refresh
  const onRefresh = () => {
    setRefreshing(true); // Start the refreshing indicator
    // Simulate fetching new data from an API or online database
    setTimeout(() => {
      // Update your data fetching logic here
      // setDoctors(InitialDoctorsData);  Refresh with updated data
      setRefreshing(false); // End the refreshing indicator
    }, 2000); // Simulate a delay of 2 seconds for fetching data
  };

  // Define colors based on the current theme
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const NearCardBgColor = isDarkTheme ? "#FBBF00" : "#ffff";
  const PoliceNearCardBgColor = isDarkTheme ? "#00BFA6" : "#ffff";
  const MedNearCardBgColor = isDarkTheme ? "#950606" : "#ffffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const PoliceTextColor = isDarkTheme ? "#ffffff" : "#000000";
  const SixthTextColor = isDarkTheme ? "#1F2937" : "#1F2937";
  const InverseTextColor = isDarkTheme ? "#000000" : "#ffffff";
  const SameTextColor = isDarkTheme ? "#ffffff" : "#ffffff";
  const IconColor = isDarkTheme ? "#ffffff" : "#000000";
  const SecondIconColor = isDarkTheme ? "#0066FF" : "#ffffff";
  const ThirdTextColor = isDarkTheme ? "#ffffff" : "#0066FF";
  const FourTextColor = isDarkTheme ? "#ffffff" : "#6B7280";
  const FifthTextColor = isDarkTheme ? "#000000" : "#6B7280";
  const TextInputColor = isDarkTheme ? "#ffffff" : "#6B7280";
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";

  const filterUpcomingSchedules = (schedules) => {
    const currentDate = new Date();
    return schedules.filter(
      (schedule) => new Date(schedule.scheduleDate) > currentDate
    );
  };

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

  const userName = user?.firstName || "User"; // Use the user's first name, or fallback to "User" if not available

  // useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(""); // Replace with your API URL
  //       const data = await response.json();
  //       setDoctors(data); // Update with fetched data
  //     } catch (error) {
  //       console.error("Error fetching doctors:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <ActivityIndicator size="large" color={TextColor} />;
  // }

  // Render the component

  const handleIconPress = (index) => {
    switch (index) {
      case 0:
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        // Handle press for "Police"
        console.log("Police icon pressed");

        // Navigate to Police Screen or perform some action
        router.push("/(Root)/(tabs)/home/EmergencyServices");

        break;
      case 1:
        // Handle press for "Doctor"
        console.log("Doctor icon pressed");
        // Navigate to Doctor Screen or perform some action
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        router.push("/(Root)/(tabs)/home/EmergencyServices/Doctor");
        break;
      case 2:
        // Handle press for "Medicine"
        console.log("Medicine icon pressed");
        // Navigate to Medicine Screen or perform some action
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        router.push("/(Root)/(tabs)/home/EmergencyServices/Medicine");
        break;
      case 3:
        // Handle press for "Hospital"
        console.log("Hospital icon pressed");
        // Navigate to Hospital Screen or perform some action
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        router.push("/(Root)/(tabs)/home/EmergencyServices/Hospital");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <View
        style={[
          HomeStyle.MainContainer,
          { backgroundColor: ScreenBackgroundColor },
        ]}
      >
        {/* Header */}
        <View style={HomeStyle.header}>
          <Text style={[HomeStyle.greetingText, { color: TextColor }]}>
            Hello,
          </Text>
          <Text style={[HomeStyle.greetingName, { color: TextColor }]}>
            {userName}
          </Text>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={HomeStyle.MainContainer}
          keyboardVerticalOffset={90} // Adjust this value as needed
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor={isDarkTheme ? "#ffffff" : "#000000"} // iOS: sets the spinner color
                colors={[isDarkTheme ? "#ffffff" : "#000000"]} // Android: sets the spinner colors
                progressBackgroundColor={isDarkTheme ? "#151718" : "#ffff"} // Android: sets the background color of the spinner
              />
            }
          >
            {/* Doctor Overview Card */}
            {/* Contacted  Doctor or schedule meetings */}
            <ScrollView
              horizontal={true}
              contentContainerStyle={[HomeStyle.scrollViewContentContainer]}
              showsHorizontalScrollIndicator={false}
            >
              {doctors.map((doctor, index) => {
                const upcomingSchedules = filterUpcomingSchedules(
                  doctor.schedules
                );
                if (upcomingSchedules.length === 0) {
                  return null; // If there are no upcoming schedules, don't render a card for this doctor
                }

                const { scheduleDate, scheduleTime } = upcomingSchedules[0]; // Display the first upcoming schedule

                return (
                  <ResponseOverviewCard
                    key={index}
                    name={doctor.name}
                    role={doctor.role}
                    imageUri={doctor.imageUri}
                    scheduleDate={scheduleDate}
                    scheduleTime={scheduleTime}
                    textColor={SameTextColor}
                    iconColor={IconColor}
                  />
                );
              })}
            </ScrollView>

            {/* Search Bar */}
            <View
              style={[HomeStyle.searchBar, { backgroundColor: TextInputColor }]}
            >
              <FontAwesome
                name="search"
                size={25}
                color={SecondIconColor}
                style={HomeStyle.searchIcon}
              />
              <TextInput
                style={[
                  HomeStyle.searchInput,
                  {
                    backgroundColor: TextInputColor,
                    color: InverseTextColor,
                  },
                ]}
                placeholder="Search doctor or health issue"
                placeholderTextColor={InverseTextColor}
              />
            </View>

            {/* Category Icons */}
            <View style={HomeStyle.categories}>
              {["building-o", "user-md", "medkit", "hospital-o"].map(
                (icon, index) => (
                  <View key={index} style={HomeStyle.categoryButton}>
                    <TouchableOpacity
                      style={[
                        HomeStyle.iconContainer,
                        { backgroundColor: IconBackgroundColor },
                      ]}
                      onPress={() => handleIconPress(index)}
                    >
                      <FontAwesome name={icon} size={20} color={IconColor} />
                    </TouchableOpacity>
                    <Text
                      style={[HomeStyle.categoryText, { color: TextColor }]}
                    >
                      {["Police", "Doctor", "Medicine", "Hospital"][index]}
                    </Text>
                  </View>
                )
              )}
            </View>
            {/* Nearby Doctor Card */}
            <View style={HomeStyle.header}>
              <Text style={[HomeStyle.greetingName, { color: TextColor }]}>
                Nearby Doctor
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={[HomeStyle.scrollViewContentContainer]}
              showsHorizontalScrollIndicator={false}
            >
              {nearbyDoctors.map((data, index) => (
                <NearbyCard
                  key={index}
                  imageUrl={data.imageUrl}
                  name={data.name}
                  role={data.role}
                  location={data.location}
                  distance={data.distance}
                  LocationIconName={data.LocationIconName}
                  LeftDownIconName={data.LeftDownIconName}
                  rating={data.rating}
                  reviews={data.reviews}
                  availability={data.availability}
                  cardBgColor={NearCardBgColor}
                  textColor={SixthTextColor}
                  fourTextColor={FourTextColor}
                  fifthTextColor={FifthTextColor}
                  thirdTextColor={ThirdTextColor}
                />
              ))}
            </ScrollView>

            <View style={HomeStyle.header}>
              <Text style={[HomeStyle.greetingName, { color: TextColor }]}>
                Nearby Police Station
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={[HomeStyle.scrollViewContentContainer]}
              showsHorizontalScrollIndicator={false}
            >
              {nearbyPolice.map((data, index) => (
                <NearbyCard
                  key={index}
                  imageUrl={data.imageUrl}
                  name={data.name}
                  role={data.role}
                  location={data.location}
                  distance={data.distance}
                  LocationIconName={data.LocationIconName}
                  LeftDownIconName={data.LeftDownIconName}
                  rating={data.rating}
                  reviews={data.reviews}
                  availability={data.availability}
                  cardBgColor={PoliceNearCardBgColor}
                  textColor={SixthTextColor}
                  fourTextColor={FourTextColor}
                  fifthTextColor={FifthTextColor}
                  thirdTextColor={ThirdTextColor}
                />
              ))}
            </ScrollView>
            <View style={HomeStyle.header}>
              <Text style={[HomeStyle.greetingName, { color: TextColor }]}>
                Nearby Hospital
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={[HomeStyle.scrollViewContentContainer]}
              showsHorizontalScrollIndicator={false}
            >
              {nearbyHospitals.map((data, index) => (
                <NearbyCard
                  key={index}
                  imageUrl={data.imageUrl}
                  name={data.name}
                  role={data.role}
                  location={data.location}
                  distance={data.distance}
                  LocationIconName={data.LocationIconName}
                  LeftDownIconName={data.LeftDownIconName}
                  rating={data.rating}
                  reviews={data.reviews}
                  availability={data.availability}
                  cardBgColor={MedNearCardBgColor}
                  textColor={PoliceTextColor}
                  fourTextColor={FourTextColor}
                  fifthTextColor={FifthTextColor}
                  thirdTextColor={ThirdTextColor}
                />
              ))}
            </ScrollView>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default HomeTabScreen;
