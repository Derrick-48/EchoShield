import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "@/constants";
import { useTheme } from "@/Context/ThemeContext";

const AwarenessProfile = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const SecondTextColor = isDarkTheme ? "#FF000D" : "#0066FF";

  return (
    <View className="mt-3 flex-row mx-2">
      <View className="flex-row items-center">
        <Text
          style={{
            color: SecondTextColor,
            fontWeight: "700",
          }}
        >
          122
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: TextColor,
            fontWeight: "500",
          }}
        >
          {" "}
          Dangers {"   "}
        </Text>
      </View>

      <View className="flex-row items-center">
        <Text
          style={{
            color: SecondTextColor,
            fontWeight: "700",
          }}
        >
          67{" "}
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: TextColor,
            fontWeight: "500",
          }}
        >
          Emergencies
        </Text>
      </View>
    </View>
  );
};

export default AwarenessProfile;
