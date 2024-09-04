import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { fetchAPI } from "@/lib/fetch"; // Adjust import as needed

const CreateReview = () => {
  const [form, setForm] = useState({
    doctor_id: "",
    reviewer: "",
    rating: "",
    comment: "",
    days: "",
    reviewer_image: "",
  });

  const handleSubmit = async () => {
    const { doctor_id, reviewer, rating, comment, days, reviewer_image } = form;

    if (
      !doctor_id ||
      !reviewer ||
      !rating ||
      !comment ||
      !days ||
      !reviewer_image
    ) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      const response = await fetchAPI("/reviews", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert("Success", "Review created successfully!");
        console.log("Review created successfully:", result);
      } else {
        const result = await response.json();
        Alert.alert("Error", result.error || "Failed to create review");
        console.warn("Failed to create review:", result.error);
      }
    } catch (error) {
      console.error("Error creating review:", error);
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
        placeholder="Reviewer"
        value={form.reviewer}
        onChangeText={(value) => setForm({ ...form, reviewer: value })}
      />
      <TextInput
        placeholder="Rating"
        value={form.rating}
        onChangeText={(value) => setForm({ ...form, rating: value })}
      />
      <TextInput
        placeholder="Comment"
        value={form.comment}
        onChangeText={(value) => setForm({ ...form, comment: value })}
      />
      <TextInput
        placeholder="Days"
        value={form.days}
        onChangeText={(value) => setForm({ ...form, days: value })}
      />
      <TextInput
        placeholder="Reviewer Image URL"
        value={form.reviewer_image}
        onChangeText={(value) => setForm({ ...form, reviewer_image: value })}
      />
      <Button title="Create Review" onPress={handleSubmit} />
    </View>
  );
};

export default CreateReview;
