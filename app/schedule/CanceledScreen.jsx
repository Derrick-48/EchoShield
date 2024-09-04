import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import CanceledScheduleOverviewCard from "@/components/CanceledScheduleCard";
import { images } from "@/constants";

const CanceledScreenRoute = ({ schedules, doctor }) => {
  if (!schedules || schedules.length === 0) {
    return (
      <View>
        <Image source={images.noResult} style={{ width: 200, height: 200 }} />
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
      <ScrollView>
        {schedules.map((schedule, index) => (
          <CanceledScheduleOverviewCard
            key={index}
            name={doctor.name} // Include the doctor’s name if needed
            specialization={doctor.specialization} // Include the doctor’s role if needed
            imageUrl={doctor.imageUrl} // Include the doctor’s image if needed
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

export default CanceledScreenRoute;
