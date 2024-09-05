import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useTheme } from "@/Context/ThemeContext";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icons from MaterialCommunityIcons or any other icon set

const MedicineScreen = () => {
  return (
    <View className="bg-white flex-auto">
      {/* Card Content */}
      <View className=" gap-4  ">
        {/* First Row of Buttons */}
        <View className="flex-row gap-4  justify-center ">
          <TouchableOpacity className="h-14 w-36   flex items-center justify-center bg-white border border-gray-300 rounded-xl">
            <View className="flex items-center justify-center flex-row">
              <Icon
                name="pill"
                size={24}
                color="#4CAF50"
                style={{ marginBottom: 4 }}
              />
              <Text className="text-sm  font-Jakarta ">Medications</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-14 w-36   flex items-center justify-center bg-white border border-gray-300 rounded-xl">
            <View className="flex items-center justify-center flex-row">
              <Icon
                name="cached"
                size={24}
                color="#FFC107"
                style={{ marginBottom: 4, marginRight: 4 }}
              />
              <Text className="text-sm   font-Jakarta ">Refills</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Second Row of Buttons */}
        <View className="flex-row gap-4 justify-center">
          <TouchableOpacity className="h-14 w-36  flex items-center justify-center bg-white border border-gray-300 rounded-xl">
            <View className="flex items-center justify-center flex-row">
              <Icon
                name="plus"
                size={24}
                color="#2196F3"
                style={{ marginBottom: 4 }}
              />
              <Text className="text-sm   font-Jakarta ">History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="h-14 w-36  flex items-center justify-center bg-white border border-gray-300 rounded-xl">
            <View className="flex items-center justify-center flex-row">
              <Icon
                name="video"
                size={24}
                color="#E91E63"
                style={{ marginBottom: 4 }}
              />
              <Text className="text-sm  font-Jakarta ">Pharmacy</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MedicineScreen;
