import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { symptoms } from "@/constants/SymptomsData";

const SymptomData = () => {
  const { SymptomsId } = useLocalSearchParams();

  const decodedId = decodeURIComponent(SymptomsId);

  // Check if the symptom exists in the array
  const symptom = symptoms.find((symptom) => symptom === decodedId);

  if (!symptom) {
    return (
      <View>
        <Text>Symptom not found.</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{symptom}</Text>
    </View>
  );
};

export default SymptomData;
