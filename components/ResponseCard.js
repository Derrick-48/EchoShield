// DoctorCard.js
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import HomeStyle from "@/Styles_Theme/HomeScreenStyle";

const ResponseOverviewCard = ({
  name,
  role,
  imageUri,
  scheduleDate,
  scheduleTime,
  textColor,
  iconColor,
}) => {
  return (
    <View style={HomeStyle.doctorOverviewCard}>
      <View style={HomeStyle.doctorCard}>
        <Image source={{ uri: imageUri }} style={HomeStyle.doctorImage} />
        <View style={HomeStyle.doctorInfo}>
          <View style={styles.textWrapper}>
            <Text style={[HomeStyle.doctorName, { color: textColor }]}>
              {name}
            </Text>
          </View>
          <Text style={[HomeStyle.doctorRole, { color: textColor }]}>
            {role}
          </Text>
        </View>
        <TouchableOpacity style={HomeStyle.arrowIcon}>
          <FontAwesome name="chevron-right" size={20} color={textColor} />
        </TouchableOpacity>
      </View>
      {/* Separator Line */}
      <View style={HomeStyle.separatorLine} />
      <View style={HomeStyle.doctorSchedule}>
        <MaterialIcons name="date-range" size={16} color={iconColor} />
        <Text style={[HomeStyle.scheduleText, { color: textColor }]}>
          {"  "} {scheduleDate} {"  "}
        </Text>
        <MaterialIcons name="access-time" size={16} color={iconColor} />
        <Text style={[HomeStyle.scheduleText, { color: textColor }]}>
          {"  "}
          {scheduleTime}
        </Text>
      </View>
    </View>
  );
};

export default ResponseOverviewCard;
const styles = StyleSheet.create({
  textWrapper: {
    // Shadow for iOS
    shadowColor: "#000000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius

    // Shadow for Android
    elevation: 5, // Elevation for Android
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
});
