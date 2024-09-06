import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useMemo, useState } from "react";
import BottomSheet, { TouchableHighlight } from "@gorhom/bottom-sheet";
import NearbyDoctors from "@/components/NearbyDoctors";
import { ScrollView } from "react-native-gesture-handler";

const CustomHandle = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.customHandleContainer}>
        <View style={styles.customHandle} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const doctorSearch = () => {
  // ref for the BottomSheet
  const bottomSheetRef = useRef(null);

  const snapDocPoints = useMemo(() => ["0%", "70%", "100%"], []);
  const [initialSnapPoint, setSnapPoint] = useState(2);

  const handlePress = () => {};

  const [initialSpeciality, setSpeciality] = useState("Nothing Selected");
  const [initialLocation, setLocation] = useState("Nothing Selected");
  const [initialAvailability, setAvailability] = useState("Nothing Selected");
  const [searchNearByDoctor, setSearchNearByDoctor] = useState(null);

  // snap points for the BottomSheet
  const snapPoints = useMemo(() => ["15%", "25%", "50%", "75%"], []);

  return (
    <View className="flex-1 bg-white p-4">
      {/* Search Doctor Panel */}
      <View className="bg-white rounded-3xl p-6 shadow-lg">
        <View className="flex-row justify-between items-center">
          <Text className="text-xl font-bold">Search Doctor</Text>
        </View>

        {/* Input Fields */}
        <View className="mt-6">
          {/* Specialty Input */}

          <TouchableOpacity>
            <View className="flex-row items-center bg-gray-100 p-3 w-full h-14  rounded-full mb-4">
              <View className=" bg-slate-200 rounded-full w-10 h-10 justify-center self-center items-center ">
                <FontAwesome
                  name="search"
                  size={18}
                  color="#7e22ce"
                  className="mr-2"
                />
              </View>

              <View className=" ml-4 flex-col">
                <Text className="text-sm font-JakartaMedium">Speciality</Text>
                <Text className="text-sm font-JakartaBold ">
                  {initialSpeciality}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Location Input */}
          <TouchableOpacity>
            <View className="flex-row items-center bg-gray-100 p-3 w-full h-14  rounded-full mb-4">
              <View className=" bg-slate-200 rounded-full w-10 h-10 justify-center self-center items-center ">
                <MaterialIcons
                  name="location-on"
                  size={24}
                  color="#7e22ce"
                  className="mr-2"
                />
              </View>
              <View className=" ml-4 flex-col">
                <Text className="text-sm font-JakartaMedium">Location</Text>
                <Text className="text-sm font-JakartaBold ">
                  New York, NY, USA
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Availability Input */}

          <TouchableOpacity>
            <View className="flex-row items-center bg-gray-100 p-3 w-full h-14  rounded-full mb-4">
              <View className=" bg-slate-200 rounded-full w-10 h-10 justify-center self-center items-center ">
                <MaterialIcons
                  name="date-range"
                  size={18}
                  color="#7e22ce"
                  className="mr-2"
                />
              </View>
              <View className=" ml-4 flex-col">
                <Text className="text-sm font-JakartaMedium">Availability</Text>
                <Text className="text-sm font-JakartaBold ">Today,26 Nov</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View className="mt-6">
          <TouchableOpacity className="bg-purple-600 p-4 rounded-full mb-3">
            <Text className="text-white text-center font-bold">
              Find Doctor
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={1} // default index of the bottom sheet
        snapPoints={snapPoints}
        handleComponent={CustomHandle} // Use the custom handle component
      >
        {/* This is the Update with the location selected above */}
        {/* Nearby Doctors List */}
        <View className="mt-6 p-4 shadow-lg">
          <Text className="text-lg font-bold">Nearby Doctors</Text>
          {/* Example Doctor Card */}
          <ScrollView>
            <NearbyDoctors
              noYear={"6"}
              DoctorName={" Dr. Leonard Campbell "}
              Speciality={"Cardiologist"}
            />
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

export default doctorSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  handleIndicator: {
    width: 80, // Increase the width of the handle bar
    height: 8, // Increase the height of the handle bar
    backgroundColor: "#aaa", // Change the color as needed
    borderRadius: 4, // Adjust the border radius if needed
  },
  customHandleContainer: {
    position: "absolute",
    top: -20, // Position it above the bottom sheet content
    left: "50%",
    marginLeft: -40, // Center the handle horizontally
    zIndex: 10, // Ensure it stays on top
  },
  customHandle: {
    width: 80,
    height: 6,
    backgroundColor: "#7e22ce",
    borderRadius: 4,
  },
});
