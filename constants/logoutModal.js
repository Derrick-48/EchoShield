import {
  Image,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { ReactNativeModal } from "react-native-modal";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { useUser, useSignIn, useClerk } from "@clerk/clerk-expo";
import { router } from "expo-router";

const LogoutModal = ({
  isModalVisible,
  setModalVisible,
  isLoggingOut,
  setIsLoggingOut,
}) => {
  const { user } = useUser();

  const handleLogout = async () => {
    const { signOut } = useClerk();
    try {
      await signOut();
      Alert.alert("Success", "You have been logged out.");
      router.replace("/(auth)/Sign-in"); // Redirect to the sign-in page
    } catch (error) {
      Alert.alert("Error", "Failed to log out. Please try again.");
      console.error(error);
    }

    setIsLoggingOut(true); // Start showing the activity indicator
    setTimeout(() => {
      setIsLoggingOut(false); // Hide the activity indicator
      setModalVisible(false); // Close the modal
    }, 2000); // Simulate a delay of 2 seconds for logging out
  };

  return (
    <>
      <View className="bg-white flex-1">
        <ReactNativeModal isVisible={isModalVisible}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text className=" font-JakartaBold  text-lg">Close</Text>
            </TouchableOpacity>
            <Image
              source={images.check}
              className="w-[50px] h-[50px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">
              Log Out
            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              Do You Want To Log Out From Your Account?
            </Text>
            <Text className="text-base text-blue-600 font-JakartaExtraBold text-center mt-2">
              {user.emailAddresses[0].emailAddress}
            </Text>
            {isLoggingOut ? (
              <ActivityIndicator />
            ) : (
              <CustomButton
                title="Log Out"
                onPress={handleLogout}
                className="mt-5"
              />
            )}
          </View>
        </ReactNativeModal>
      </View>
    </>
  );
};

export default LogoutModal;
