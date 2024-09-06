import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Link } from "expo-router";

const NearbyDoctors = ({ DoctorName, Speciality, noYear }) => {
  return (
    <Link
      href={{
        pathname: "/searchDoctor/doctorProfile",
        params: { DoctorName, Speciality, noYear },
      }}
      asChild
    >
      <TouchableOpacity>
        <View className="mt-4 flex-row items-center bg-white p-4 rounded-2xl shadow">
          <View className="w-12 h-12 rounded-full bg-gray-200 mr-3"></View>
          <View>
            <Text className="font-bold">
              {DoctorName}
              <MaterialIcons name="verified" size={14} color="purple" />
            </Text>
            <Text className="text-gray-600 ml-1">
              {Speciality} - {noYear} yrs of exp.
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default NearbyDoctors;
