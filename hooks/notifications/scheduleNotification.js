// scheduleNotification.js
import * as Notifications from "expo-notifications";

export const scheduleNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Don't forget!",
      body: "You have a new message!",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 }, // Notification will trigger after 2 seconds
  });
};
