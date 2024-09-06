import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  FlatList,
  Modal,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, {
  useRef,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import NearbyDoctors from "@/components/NearbyDoctors";
import { ScrollView } from "react-native-gesture-handler";
import { imageDataURL } from "@/constants/ImageData";
import { useAllDoctorsData } from "@/hooks/useAllDoctorsData";
import DatePickerModal from "react-native-modern-datepicker";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

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
  useEffect(() => {
    const getCurrentLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;

      setLocation({ latitude, longitude });

      // Reverse geocoding
      const [result] = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      setAddress(
        result
          ? `${result.city}, ${result.region}, ${result.country}`
          : "Unknown location"
      );
      setIsLoading(false);
    };

    getCurrentLocation();
  }, []);
  const [address, setAddress] = useState("Loading...");

  const { cleanedDoctorsData, loading, error } = useAllDoctorsData();
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  // ref for the BottomSheet
  const bottomSheetRef = useRef(null);
  const bottomSheetSpecialityRef = useRef(null);
  const bottomSheetLocRef = useRef(null);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const snapLocPoints = useMemo(() => ["1%", "50%", "80%"], []);
  const snapSpecsPoints = useMemo(() => ["40%", "80%"], []);
  const [initialSpeciality, setSpeciality] = useState(
    "No Speciality  Selected"
  );
  const [initialLocation, setInitialLocation] = useState(
    "No  Location  Selected"
  );
  const [initialAvailability, setAvailability] = useState("Nothing  Selected");
  const [searchNearByDoctor, setSearchNearByDoctor] = useState(null);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") return;

    setSearchLoading(true);

    try {
      const results = await Location.geocodeAsync(searchQuery);
      if (results.length > 0) {
        const { latitude, longitude } = results[0];
        setLocation({ latitude, longitude });

        // Reverse geocoding to get the address
        const [result] = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        setAddress(
          result
            ? `${result.city}, ${result.region}, ${result.country}`
            : "Unknown location"
        );
      } else {
        setAddress("No results found");
      }
    } catch (error) {
      console.error(error);
      setAddress("Error occurred");
    }

    setSearchLoading(false);
  };

  // snap points for the BottomSheet
  const snapPoints = useMemo(() => ["15%", "25%", "50%", "85%"], []);
  // Function to handle the onPress event
  const handleOpenBottomSheet = useCallback(() => {
    // Open the BottomSheet to the first snap point (index 0)
    bottomSheetSpecialityRef.current?.expand();
  }, []);

  const handleCloseBottomSheet = useCallback(() => {
    // Close the BottomSheet
    bottomSheetSpecialityRef.current?.close();
  }, []);

  const handleOpenLocBottomSheet = useCallback(() => {
    // Open the BottomSheet to the first snap point (index 0)
    bottomSheetLocRef.current?.expand();
  }, []);

  const handleCloseLocBottomSheet = useCallback(() => {
    // Close the BottomSheet
    bottomSheetLocRef.current?.close();
  }, []);
  const handlePress = (doctor) => {
    setSpeciality(doctor.specialization);
  };
  // Function to open the date picker
  const handleOpenDatePicker = useCallback(() => {
    setDatePickerVisible(true);
  }, []);

  // Function to close the date picker
  const handleCloseDatePicker = useCallback(() => {
    setDatePickerVisible(false);
  }, []);
  // Function to handle date and time selection
  const handleDateChange = (selectedDate) => {
    setAvailability(selectedDate); // set the selected date
    handleCloseDatePicker(); // close the date picker modal
  };
  const handleSearchingDoctor = (doctor) => {};
  const handleLocationChange = () => {
    setInitialLocation(address);
  };

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

          <TouchableOpacity onPress={handleOpenBottomSheet}>
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
          <TouchableOpacity onPress={handleOpenLocBottomSheet}>
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
                  {initialLocation}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Availability Input */}

          <TouchableOpacity onPress={handleOpenDatePicker}>
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
                <Text className="text-sm font-JakartaBold ">
                  {initialAvailability}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* Date Picker Modal */}
        <Modal
          visible={isDatePickerVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseDatePicker}
        >
          <View className="flex-1 justify-center items-center">
            <View className="bg-primary m-5 items-center justify-center rounded-3xl p-9 w-[90%] shadow-xl ">
              <DatePickerModal
                mode="datetime"
                onDateChange={handleDateChange}
                minimumDate={new Date().toISOString().split("T")[0]} // Optional: set minimum date to today
              />
              <TouchableOpacity onPress={handleCloseDatePicker}>
                <View className=" w-16 h-6  mt-4 items-center justify-center  rounded-xl bg-slate-950">
                  <Text className="text-center  text-white  ">Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Buttons */}
        <View className="mt-6">
          <TouchableOpacity
            className="bg-purple-600 p-4 rounded-full mb-3"
            onPress={handleSearchingDoctor}
          >
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
              imageURl={imageDataURL[0]}
            />
          </ScrollView>
        </View>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetSpecialityRef}
        index={-1} // Initial index set to -1 to keep it closed
        snapPoints={snapSpecsPoints}
      >
        <View style={styles.contentContainer}>
          <View className=" pl-60 mt-4">
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <View className="rounded-full bg-slate-950 w-8 h-8 self-end   justify-center items-center">
                <MaterialIcons name="close" size={24} color="#ffffffff" />
              </View>
            </TouchableOpacity>
          </View>
          {loading ? (
            <View style={styles.center}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View className="flex-1 p-4">
              {cleanedDoctorsData.length > 0 ? (
                <FlatList
                  data={cleanedDoctorsData}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                      <View className="mb-5 p-2 bg-slate-900 rounded-lg shadow-sm">
                        <Text className="text-lg text-white">
                          {item.specialization}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  ListEmptyComponent={() => <Text>No doctors available</Text>}
                />
              ) : (
                <View style={styles.center}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              )}
            </View>
          )}
        </View>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetLocRef}
        index={-1} // Initial index set to -1 to keep it closed
        snapPoints={snapLocPoints}
      >
        <View style={styles.contentContainer}>
          <View className=" pl-60  mt-4">
            <TouchableOpacity onPress={handleCloseLocBottomSheet}>
              <View className="rounded-full bg-slate-950 w-8 h-8 self-end   justify-center items-center">
                <MaterialIcons name="close" size={24} color="#ffffffff" />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView className="flex-1 ">
            <TextInput
              className="w-11/12 h-10 border border-gray-300 rounded-full px-4 my-4"
              placeholder="Search for a place"
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor={"black"}
            />
            <TouchableOpacity
              onPress={handleSearch}
              className="bg-[#7e22ce] py-2 rounded-full my-4 w-11/12 items-center justify-center"
            >
              <Text className="text-white">Search</Text>
            </TouchableOpacity>
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : location ? (
              <>
                <MapView
                  style={{ width: "100%", height: 400 }}
                  initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  onRegionChangeComplete={(region) => {
                    setLocation({
                      latitude: region.latitude,
                      longitude: region.longitude,
                    });

                    // Reverse geocoding
                    const getAddress = async () => {
                      const [result] = await Location.reverseGeocodeAsync({
                        latitude: region.latitude,
                        longitude: region.longitude,
                      });
                      setAddress(
                        result
                          ? `${result.city}, ${result.region}, ${result.country}`
                          : "Unknown location"
                      );
                    };

                    getAddress();
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: location.latitude,
                      longitude: location.longitude,
                    }}
                    title="You are here"
                  />
                </MapView>

                <Text className="text-center mt-2">{address}</Text>

                <TouchableOpacity onPress={handleLocationChange}>
                  <View className="w-24 h-6 mt-4 items-center justify-center rounded-xl bg-slate-950">
                    <Text className="text-center text-white">Set Location</Text>
                  </View>
                </TouchableOpacity>
              </>
            ) : (
              <Text>No location found</Text>
            )}
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
