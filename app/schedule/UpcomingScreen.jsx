import React from "react";
import { View, Text, ScrollView } from "react-native";
import ScheduleOverviewCard from "@/components/ScheduleCard";

const UpcomingScreenRoute = ({ schedules, doctor }) => {
  if (!schedules || schedules.length === 0) {
    return (
      <View>
        <Text>No upcoming schedules</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        backgroundColor: "white",
        padding: 12,
      }}
    >
      <ScrollView>
        {schedules.map((schedule, index) => (
          <ScheduleOverviewCard
            key={index}
            name={doctor.name} // Include the doctor’s name if needed
            specialization={doctor.specialization} // Include the doctor’s role if needed
            imageUri={doctor.imageUrl} // Include the doctor’s image if needed
            scheduleDate={schedule.scheduleDate}
            scheduleTime={schedule.scheduleTime}
            iconColor={"black"}
            textColor={"black"}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UpcomingScreenRoute;
