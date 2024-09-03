import React, { useState } from "react";
import { View, Button, Alert, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // or any other icon set from react-native-vector-icons

const CustomCallButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    className="p-2 rounded-full bg-white mx-1 "
  >
    <Icon name={"call"} size={24} color={"black"} />
  </TouchableOpacity>
);

const CallButton = ({ phoneNumber, Children }) => {
  const handleCallPress = () => {
    if (phoneNumber) {
      Linking.openURL(`tel:${phoneNumber}`).catch((err) =>
        Alert.alert("Error", "Could not make a call.")
      );
    } else {
      Alert.alert("Error", "No phone number available.");
    }
  };

  return <CustomCallButton onPress={handleCallPress} />;
};

export default CallButton;
