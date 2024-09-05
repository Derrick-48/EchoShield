import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { useRouter } from "expo-router";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@/Context/ThemeContext";
import { StatusBar } from "expo-status-bar";

const { width, height } = Dimensions.get("window");

const Onboarding = () => {
  const { isDarkTheme } = useTheme();
  const statusBarStyle = isDarkTheme ? "light" : "dark";
  const router = useRouter();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGetStarted = () => {
    router.replace("/(auth)/Sign-in");
  };

  return (
    <>
      <StatusBar style={statusBarStyle} />
      <SafeAreaView style={styles.safeArea}>
        <Swiper
          ref={swiperRef}
          loop={false}
          showsPagination={true}
          paginationStyle={styles.pagination}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          <View style={styles.slide}>
            <Icon name="shield" size={80} color="#0066FF" style={styles.icon} />
            <Text style={styles.title}>Welcome to EchoShield</Text>
            <Text style={styles.message}>
              Your trusted safety companion, here to protect and guide you in
              any emergency.
            </Text>
          </View>

          <View style={styles.slide}>
            <Icon
              name="list-alt"
              size={80}
              color="#0066FF"
              style={styles.icon}
            />
            <Text style={styles.title}>Essential Features</Text>
            <View style={styles.featureList}>
              <View style={styles.featureItem}>
                <Icon
                  name="microphone"
                  size={40}
                  color="#0066FF"
                  style={styles.featureIcon}
                />
                <Text style={styles.FeatureMessage}>
                  Record Audio: Capture critical moments in real-time.
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Icon
                  name="location-arrow"
                  size={40}
                  color="#0066FF"
                  style={styles.featureIcon}
                />
                <Text style={styles.FeatureMessage}>
                  Real-Time Location: Share your location instantly.
                </Text>
              </View>
              <View style={styles.featureItem}>
                <Icon
                  name="bell"
                  size={40}
                  color="#0066FF"
                  style={styles.featureIcon}
                />
                <Text style={styles.FeatureMessage}>
                  Automated Alerts: Notify your contacts with one tap.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.slide}>
            <Icon name="lock" size={80} color="#0066FF" style={styles.icon} />
            <Text style={styles.title}>Your Privacy Matters</Text>
            <Text style={styles.message}>
              We prioritize your safety and privacy with top-tier encryption and
              secure storage.
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.slide}>
            {/* Card Header */}
            <View className="bg-primary p-2  ">
              <Text className="text-2xl font-bold text-black">
                Emergency AI Assistant
              </Text>
            </View>

            {/* Card Content */}
            <View className="p-2 space-y-4 flex-1">
              {/* Real-Time Recording */}
              <View className=" flex-row items-center gap-4">
                <View className="bg-gray-200 rounded-full p-2">
                  <Icon name="microphone" size={24} color="#6B7280" />
                </View>

                <View className="flex-1">
                  <Text className="font-medium text-black ">
                    Real-Time Recording
                  </Text>
                  <Text className="text-sm text-gray-500  ">
                    Activate the microphone to record your emergency.
                  </Text>
                </View>
              </View>

              {/* Location Tracking */}
              <View className="flex flex-row items-center gap-4">
                <View className="bg-gray-200 rounded-full p-2">
                  <Icon name="crosshairs-gps" size={24} color="#6B7280" />
                </View>

                <View className="flex-1">
                  <Text className="font-medium text-black ">
                    Location Tracking
                  </Text>
                  <Text className="text-base text-gray-500  ">
                    Your location will be shared with emergency services.
                  </Text>
                </View>
              </View>

              {/* Emergency Alerts */}
              <View className="flex flex-row items-center gap-4">
                <View className="bg-gray-200 rounded-full p-2">
                  <Icon name="bell" size={24} color="#6B7280" />
                </View>
                <View className=" flex-1 ">
                  <Text className="font-medium">Emergency Alerts</Text>
                  <Text className="text-sm text-gray-500">
                    Alerts will be sent to your emergency contacts.
                  </Text>
                </View>
              </View>
            </View>

            {/* Card Footer */}

            <View className="justify-center self-center ">
              <TouchableOpacity className=" flex flex-row items-center justify-center bg-black  w-52 h-16 bg-primary rounded-3xl ">
                <Icon name="alarm" size={20} color="#ffffff" />
                <Text className="text-white font-medium ">
                  Activate Emergency AI
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Swiper>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width,
    height,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 8,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 15,
    fontWeight: "600",
  },
  FeatureMessage: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    fontWeight: "700",
  },
  featureList: {
    marginTop: 20,
  },
  featureItem: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
  },
  featureIcon: {
    marginRight: 15,
    marginBottom: 5,
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
  pagination: {
    bottom: 15,
  },
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 2,
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#0066FF",
    borderRadius: 2,
  },
});

export default Onboarding;
