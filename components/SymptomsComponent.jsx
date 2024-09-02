import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const SymptomsComponent = ({ Symptom, ButtonColor2, TextColor }) => {
  return (
    <View>
      <View className="flex-row flex-1  ">
        <TouchableOpacity
          className={`rounded-2xl ${ButtonColor2} w-28  max-w-full h-12 items-center justify-center  m-2`}
        >
          <Text className={` ${TextColor} font-JakartaSemiBold text-sm`}>
            {Symptom}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SymptomsComponent;
