import React, { useState } from "react";
import { View, TextInput, Alert, Button } from "react-native";
import { fetchAPI } from "@/lib/fetch"; // Adjust import as needed

const CreateDoctor = () => {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    rating: "",
    imageUrl: "",
    experience: "",
    contact: "",
    bio: "",
    consultantPrice: "",
  });

  const handleSubmit = async () => {
    const {
      name,
      specialization,
      rating,
      imageUrl,
      experience,
      contact,
      bio,
      consultantPrice,
    } = form;

    if (
      !name ||
      !specialization ||
      !rating ||
      !imageUrl ||
      !experience ||
      !contact ||
      !bio ||
      !consultantPrice
    ) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      console.log("Submitting doctor data:", form);

      const response = await fetchAPI("/(api)/doctor", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert("Success", "Doctor created successfully!");
        console.log("Doctor created successfully:", result);
      } else {
        const result = await response.json();
        Alert.alert("Error", result.error || "Failed to create doctor");
        console.warn("Failed to create doctor:", result.error);
      }
    } catch (error) {
      console.error("Error creating doctor:", error);
      Alert.alert("Error", "An unexpected error occurred.");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={form.name}
        onChangeText={(value) => setForm({ ...form, name: value })}
      />
      {/* Add more inputs here for other fields */}
      <Button title="Create Doctor" onPress={handleSubmit} />
    </View>
  );
};

export default CreateDoctor;
