import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useRef, useMemo } from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";

const CustomHandle = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.customHandleContainer}>
        <View style={styles.customHandle} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const LocationTab = () => {
  const { isDarkTheme } = useTheme();
  const backgroundColor = isDarkTheme ? "#000" : "#FFF";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["10%", "25%", "50%", "87%"], []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: ScreenBackgroundColor }]}
    >
      <Text style={[styles.text, { color: TextColor }]}>LocationTab</Text>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        handleComponent={CustomHandle} // Use the custom handle component
      >
        <View style={styles.contentContainer}>
          <Text>Bottom Sheet Content</Text>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default LocationTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#0066FF",
    padding: 15,
    borderRadius: 30,
    marginTop: 40,
    width: "80%",
    alignItems: "center",
    shadowColor: "#0066FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  customHandleContainer: {
    position: "absolute",
    top: -20, // Position it above the bottom sheet content
    left: "50%",
    marginLeft: -40, // Center the handle horizontally
    zIndex: 10, // Ensure it stays on top
  },
  customHandle: {
    width: 80,
    height: 8,
    backgroundColor: "#aaa",
    borderRadius: 4,
  },
});
