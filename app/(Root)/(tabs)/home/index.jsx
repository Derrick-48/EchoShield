// Import necessary components and libraries
import {
  View,
  Text,
  HomeStyleheet,
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
import HomeStyle from "@/Styles_Theme/HomeScreenStyle";
import NearbyCard from "@/components/NearbyCard";
import ResponseOverviewCard from "@/components/ResponseCard";

// Define the HomeTabScreen component
const HomeTabScreen = () => {
  // Get the current theme from the ThemeContext
  const { isDarkTheme } = useTheme();

  // Define colors based on the current theme

  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const NearCardBgColor = isDarkTheme ? "#FBBF00" : "#ffff";
  const PoliceNearCardBgColor = isDarkTheme ? "#00BFA6" : "#ffff";
  const MedNearCardBgColor = isDarkTheme ? "#FF4500" : "#ffffff";
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
              Hi James
            </Text>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={HomeStyle.MainContainer}
            keyboardVerticalOffset={90} // Adjust this value as needed
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Doctor Overview Card */}
              <ResponseOverviewCard
                name="Dr. Imran Syahir"
                role="General Doctor"
                imageUri={imageDataURL[0]}
                scheduleDate="Sunday, 12 June"
                scheduleTime="11:00 - 12:00 AM"
                textColor={SameTextColor}
                iconColor={IconColor}
              />
              {/* Search Bar */}
              <View
                style={[
                  HomeStyle.searchBar,
                  { backgroundColor: TextInputColor },
                ]}
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
                    { backgroundColor: TextInputColor },
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
              <NearbyCard
                imageUrl={imageDataURL[1]}
                name="Dr. Joseph Brostito"
                role="Dental Specialist"
                location="1.2 Km"
                LocationIconName="location-on"
                distance="1.2 Km"
                LeftDownIconName="star"
                rating="4.8"
                reviews="120"
                availability="Open at 17:00"
                cardBgColor={NearCardBgColor}
                textColor={TextColor}
                fourTextColor={FourTextColor}
                fifthTextColor={FifthTextColor}
                thirdTextColor={ThirdTextColor}
              />
              <View style={HomeStyle.header}>
                <Text style={[HomeStyle.greetingName, { color: TextColor }]}>
                  Nearby Police Station
                </Text>
              </View>
              <NearbyCard
                imageUrl={imageDataURL[2]}
                name="Prestea Police Station"
                role="Near Urban Council"
                location="1.2 Km"
                distance="1.2 Km"
                LocationIconName="location-on"
                LeftDownIconName="police-badge"
                rating="4.8"
                reviews="120"
                availability="Opens 24/7"
                cardBgColor={PoliceNearCardBgColor}
                textColor={TextColor}
                fourTextColor={FourTextColor}
                fifthTextColor={FifthTextColor}
                thirdTextColor={ThirdTextColor}
              />
              <View style={HomeStyle.header}>
                <Text style={[HomeStyle.greetingName, { color: TextColor }]}>
                  Nearby Hospital
                </Text>
              </View>
              <NearbyCard
                imageUrl={imageDataURL[4]}
                name="Prestea Medical Hospital"
                role="Near The Fuel Station"
                location="1.2 Km"
                LocationIconName="location-on"
                LeftDownIconName="police-badge"
                distance="1.2 Km"
                rating="4.8"
                reviews="120"
                availability="Opens 24/7"
                cardBgColor={MedNearCardBgColor}
                textColor={TextColor}
                fourTextColor={FourTextColor}
                fifthTextColor={FifthTextColor}
                thirdTextColor={ThirdTextColor}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default HomeTabScreen;
