import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SymptomsComponent = ({ Symptom, ButtonColor2, TextColor }) => {
  return (
    <View>
      <View className="flex-row flex-1">
        <Link
          href={{
            pathname: "/symptom/[sypmtoms]",
            params: {
              SymptomsId: encodeURIComponent(Symptom), // Encoding the name to handle special characters
            },
          }}
          asChild
        >
          <TouchableOpacity
            className={`rounded-2xl ${ButtonColor2} h-12 items-center justify-center m-2`}
            style={{ minWidth: 70, paddingHorizontal: 12 }} // Dynamic width styling
          >
            <Text className={`${TextColor} font-JakartaSemiBold text-sm`}>
              {Symptom}
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default SymptomsComponent;
