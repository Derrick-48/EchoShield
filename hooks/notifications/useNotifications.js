import * as Notifications from "expo-notifications";
import { useEffect, useRef } from "react";
import { Alert, Platform } from "react-native";

const useNotifications = () => {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Request permission
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Notifications need permission to function properly"
        );
        return;
      } else {
        console.log("Notification permissions granted!");
      }
    };

    requestPermissions();

    // Listener for notifications received while the app is in the foreground
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        Alert.alert(
          notification.request.content.title,
          notification.request.content.body
        );
        console.log("Notification Received!", notification);
      });

    // Listener for user interaction with a notification
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("Notification Response Received!", response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
};

export default useNotifications;
