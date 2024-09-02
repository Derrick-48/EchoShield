import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SymptomsComponent = ({ Symptom, ButtonColor2, TextColor }) => {
  return (
    <View>
      <View className="flex-row flex-1">
        <TouchableOpacity
          className={`rounded-2xl ${ButtonColor2} h-12 items-center justify-center m-2`}
          style={{ minWidth: 70, paddingHorizontal: 12 }} // Dynamic width styling
        >
          <Text className={`${TextColor} font-JakartaSemiBold text-sm`}>
            {Symptom}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SymptomsComponent;
