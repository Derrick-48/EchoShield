import {
  View,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const PopularDoctors = ({ name, specialization, DoctorImage, Ratings }) => {
  const { isDarkTheme } = useTheme();
  const { width } = useWindowDimensions();
  const TextColor = isDarkTheme ? "text-slate-900" : "text-white";
  const BackgroundColor = isDarkTheme ? "bg-white" : "bg-slate-900";
  const ButtonColor = isDarkTheme ? "bg-slate-900" : "bg-white";
  const starColor = isDarkTheme ? "#000000" : "#ffffff";
  const containerClass = width > 370 ? "w-44 h-44 " : "w-40 h-50";

  return (
    <View
      style={{
        width: "50%",
        marginBottom: 15,
      }}
    >
      <Link
        href={{
          pathname: "/doctors/[doctorId]",
          params: {
            doctorId: encodeURIComponent(name), // Encoding the name to handle special characters
            doctorSpecs: encodeURIComponent(specialization), // Fixed typo
            doctorImageUrl: encodeURIComponent(DoctorImage), // Encoding the URL
            doctorRatings: encodeURIComponent(Ratings),
          },
        }}
        asChild
      >
        <TouchableOpacity>
          <View
            className={` p-4 ${BackgroundColor}  ${containerClass} p-3 rounded-3xl mx-2   `}
          >
            <View
              className={`${ButtonColor} rounded-full w-16 h-16 items-center justify-center align-middle  self-center`}
            >
              <Image
                source={{ uri: DoctorImage }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
              />
            </View>

            <Text
              className={` ${TextColor} font-JakartaBold text-center mt-3 text-sm`}
            >
              {name}
            </Text>
            <Text
              className={`font-JakartaMedium ${TextColor} text-center mt-1 flex-1 text-xs `}
            >
              {specialization}
            </Text>

            <Text className={`font-JakartaMedium ${TextColor} text-center`}>
              <FontAwesome name="star" size={16} color={starColor} /> {"  "}
              {Ratings}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default PopularDoctors;
