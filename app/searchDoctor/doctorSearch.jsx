import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useRef, useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const doctorSearch = () => {
  // ref for the BottomSheet
  const bottomSheetRef = useRef(null);

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
          <View className="flex-row items-center bg-gray-100 p-3 rounded-full mb-4">
            <FontAwesome
              name="search"
              size={18}
              color="gray"
              className="mr-2"
            />
            <TextInput
              placeholder="All Specialities"
              className="flex-1 text-gray-700"
            />
          </View>

          {/* Location Input */}
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

          {/* Availability Input */}
          <View className="flex-row items-center bg-gray-100 p-3 rounded-full">
            <MaterialIcons
              name="date-range"
              size={18}
              color="gray"
              className="mr-2"
            />
            <TextInput
              placeholder="Today, 26 Nov"
              className="flex-1 text-gray-700"
            />
          </View>
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
      >
        {/* This is the Update with the location selected above */}
        {/* Nearby Doctors List */}
        <View className="mt-6 p-4">
          <Text className="text-lg font-bold">Nearby Doctors</Text>
          {/* Example Doctor Card */}
          <View className="mt-4 flex-row items-center bg-white p-4 rounded-2xl shadow">
            <View className="w-12 h-12 rounded-full bg-gray-200 mr-3"></View>
            <View>
              <Text className="font-bold">
                Dr. Leonard Campbell{" "}
                <MaterialIcons name="verified" size={14} color="purple" />
              </Text>
              <Text className="text-gray-600">
                Cardiologist - 6 yrs of exp.
              </Text>
            </View>
          </View>
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
});
