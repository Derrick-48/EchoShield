import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import NotificationCard from "@/components/NotificationsComponentCard";

const NotifiedState = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";

  const notifications = [
    { id: "1", message: "New message from John" },
    { id: "2", message: "Your order has been shipped" },
    { id: "3", message: "Reminder: Meeting at 3PM" },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: ScreenBackgroundColor }}>
      {/* <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationCard message={item.message} />}
        contentContainerStyle={styles.list}
      /> */}
    </View>
  );
};

export default NotifiedState;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  list: {
    paddingHorizontal: 20,
  },
});
