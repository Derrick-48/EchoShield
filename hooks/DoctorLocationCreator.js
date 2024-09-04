import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { fetchAPI } from "@/lib/fetch"; // Adjust import as needed

const CreateDoctorLocation = () => {
  const [form, setForm] = useState({
    doctor_id: "",
    place: "",
    Country_State: "",
    Clinic_Hospital: "",
  });

  const handleSubmit = async () => {
    const { doctor_id, place, Country_State, Clinic_Hospital } = form;

    if (!doctor_id || !place || !Country_State || !Clinic_Hospital) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      const response = await fetchAPI("/doctorLocation", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert("Success", "Doctor location created successfully!");
        console.log("Doctor location created successfully:", result);
      } else {
        const result = await response.json();
        Alert.alert(
          "Error",
          result.error || "Failed to create doctor location"
        );
        console.warn("Failed to create doctor location:", result.error);
      }
    } catch (error) {
      console.error("Error creating doctor location:", error);
      Alert.alert("Error", "An unexpected error occurred.");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Doctor ID"
        value={form.doctor_id}
        onChangeText={(value) => setForm({ ...form, doctor_id: value })}
      />
      <TextInput
        placeholder="Place"
        value={form.place}
        onChangeText={(value) => setForm({ ...form, place: value })}
      />
      <TextInput
        placeholder="Country/State"
        value={form.Country_State}
        onChangeText={(value) => setForm({ ...form, Country_State: value })}
      />
      <TextInput
        placeholder="Clinic/Hospital"
        value={form.Clinic_Hospital}
        onChangeText={(value) => setForm({ ...form, Clinic_Hospital: value })}
      />
      <Button title="Create Doctor Location" onPress={handleSubmit} />
    </View>
  );
};

export default CreateDoctorLocation;
