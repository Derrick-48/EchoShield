import React from "react";
import { View, Text } from "react-native";
import ScheduleOverviewCard from "@/components/ScheduleCard";

const CanceledScreenRoute = ({ schedules, doctor }) => {
  if (!schedules || schedules.length === 0) {
    return (
      <View>
        <Text>No canceled schedules</Text>
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
      {schedules.map((schedule, index) => (
        <ScheduleOverviewCard
          key={index}
          name={doctor.name} // Include the doctor’s name if needed
          role={doctor.role} // Include the doctor’s role if needed
          imageUri={doctor.imageUri} // Include the doctor’s image if needed
          scheduleDate={schedule.scheduleDate}
          scheduleTime={schedule.scheduleTime}
          iconColor={"white"}
          textColor={"black"}
        />
      ))}
    </View>
  );
};

export default CanceledScreenRoute;
