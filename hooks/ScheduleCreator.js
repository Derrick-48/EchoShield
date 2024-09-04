import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";
import CustomButton from "@/components/CustomButton"; // Adjust import as needed
import { fetchAPI } from "@/lib/fetch"; // Ensure correct import path

const CreateSchedule = () => {
  const [form, setForm] = useState({
    doctorId: "",
    scheduleDate: "",
    scheduleTime: "",
  });

  // Function to handle form submission
  const handleSubmit = async () => {
    const { doctorId, scheduleDate, scheduleTime } = form;

    if (!doctorId || !scheduleDate || !scheduleTime) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    try {
      console.log("Submitting schedule data:", form);

      const response = await fetchAPI("/(api)/schedule", {
        // Adjust endpoint if necessary
        method: "POST",
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert("Success", "Schedule created successfully!");
        console.log("Schedule created successfully:", result);
      } else {
        const result = await response.json();
        Alert.alert("Error", result.error || "Failed to create schedule");
        console.warn("Failed to create schedule:", result.error);
      }
    } catch (error) {
      console.error("Error creating schedule:", error);
      Alert.alert("Error", "An unexpected error occurred.");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Doctor ID"
        value={form.doctorId}
        onChangeText={(value) => setForm({ ...form, doctorId: value })}
      />
      <TextInput
        placeholder="Schedule Date (YYYY-MM-DD)"
        value={form.scheduleDate}
        onChangeText={(value) => setForm({ ...form, scheduleDate: value })}
      />
      <TextInput
        placeholder="Schedule Time (HH:MM)"
        value={form.scheduleTime}
        onChangeText={(value) => setForm({ ...form, scheduleTime: value })}
      />
      <CustomButton title="Create Schedule" onPress={handleSubmit} />
    </View>
  );
};

export default CreateSchedule;
