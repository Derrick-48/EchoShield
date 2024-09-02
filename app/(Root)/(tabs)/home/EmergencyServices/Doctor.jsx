import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import { useTheme } from "@/Context/ThemeContext";
import SymptomsComponent from "@/components/SymptomsComponent";
import { symptoms } from "@/constants/SymptomsData";

const DoctorScreen = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "text-slate-900" : "text-white"; // Dynamically set the background color
  const IconColor = isDarkTheme ? "text-white" : "text-blue-600"; // Dynamically set the background color
  const BackgroundColor = isDarkTheme ? "bg-white" : "bg-slate-900";
  const ScreenBackgroundColor = isDarkTheme ? "bg-primary-1000" : "bg-white";
  const ButtonColor = isDarkTheme ? "bg-slate-900" : "bg-white";
  const ButtonColor2 = isDarkTheme ? "bg-white" : "bg-slate-900";

  return (
    <ScrollView className={`p-2  flex-1 ${ScreenBackgroundColor} `}>
      <View className={`  flex-1 ${ScreenBackgroundColor} `}>
        <View className="flex-row  ">
          <View
            className={` p-4 ${BackgroundColor} w-44 h-44 p-5 rounded-3xl mx-2 shadow-sm shadow-slate-700`}
          >
            <TouchableOpacity
              className={`${ButtonColor} rounded-full w-16 h-16 items-center justify-center `}
            >
              <Text className={`${IconColor} text-4xl `}>+</Text>
            </TouchableOpacity>
            <Text className={` ${TextColor} font-JakartaBold text-lg mt-3`}>
              Clinic Visit
            </Text>
            <Text className={`font-JakartaBold ${TextColor} text-xs mt-1 `}>
              {" "}
              Make an appointment
            </Text>
          </View>

          <View className=" bg-slate-50 w-44 h-44  p-5 rounded-3xl shadow-sm shadow-slate-700">
            <TouchableOpacity className="rounded-full bg-slate-900 w-16 h-16 items-center justify-center ">
              <Entypo name="home" size={26} color="white" />
            </TouchableOpacity>
            <Text className="font-JakartaBold text-blue-950 text-lg mt-3 ">
              Home Visit{" "}
            </Text>
            <Text className="font-JakartaBold text-blue-950 text-xs mt-1 ">
              Call Doctor home
            </Text>
          </View>
        </View>
        <Text className="font-JakartaBold text-blue-950 text-lg mt-5 p-3">
          What are your symptoms?
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {symptoms.map((symptom, index) => (
          <SymptomsComponent
            key={index}
            Symptom={symptom}
            ButtonColor2={ButtonColor2}
            TextColor={TextColor}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default DoctorScreen;
