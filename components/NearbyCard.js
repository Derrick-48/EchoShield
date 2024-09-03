import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeStyle from "@/Styles_Theme/HomeScreenStyle";

const NearbyCard = ({
  imageUrl,
  name,
  role,
  location,
  LeftDownIconName,
  LocationIconName,
  distance,
  rating,
  reviews,
  availability,
  cardBgColor,
  textColor,
  fourTextColor,
  fifthTextColor,
  thirdTextColor,
}) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          HomeStyle.nearDoctorCardContainer,
          {
            backgroundColor: cardBgColor,
            marginHorizontal: 10,
            elevation: 4,
            shadowRadius: 5,
          },
        ]}
      >
        <View style={HomeStyle.nearDoctorCard}>
          <Image source={{ uri: imageUrl }} style={HomeStyle.nearDoctorImage} />
          <View style={HomeStyle.nearDoctorInfo}>
            <View style={styles.textWrapper}>
              <Text style={[HomeStyle.nearDoctorName, { color: textColor }]}>
                {name}
              </Text>
            </View>
            <Text
              style={[
                HomeStyle.nearDoctorRole,
                { color: fourTextColor, fontWeight: "600" },
              ]}
            >
              {role}
            </Text>
            <View style={HomeStyle.nearDoctorDetailsContainer}>
              <View style={HomeStyle.nearDoctorDetails}>
                <MaterialIcons
                  name={LocationIconName}
                  size={22}
                  color={fifthTextColor}
                />
                <Text
                  style={[
                    HomeStyle.distanceText,
                    { color: fifthTextColor, fontWeight: "600", fontSize: 15 },
                  ]}
                >
                  {" "}
                  {distance}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={HomeStyle.separatorLine} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <MaterialCommunityIcons
            name={LeftDownIconName}
            size={20}
            color={fifthTextColor}
          />
          <Text
            style={[
              HomeStyle.ratingText,
              { color: fifthTextColor, fontWeight: "600", paddingRight: 5 },
            ]}
          >
            {"  "} {rating} ({reviews} Reviews)
          </Text>
          <MaterialIcons name="access-time" size={20} color={thirdTextColor} />
          <Text
            style={[
              HomeStyle.availabilityText,
              { color: thirdTextColor, fontWeight: "700", paddingRight: 5 },
            ]}
          >
            {"   "}
            {availability}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyCard;

const styles = StyleSheet.create({
  textWrapper: {
    // Shadow for iOS
    shadowColor: "#000000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3.2, // Shadow blur radius

    // Shadow for Android
    elevation: 5, // Elevation for Android
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
});
