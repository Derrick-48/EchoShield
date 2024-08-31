import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/Context/ThemeContext";
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { imageDataURL } from "@/constants/ImageData";
import * as ImagePicker from "expo-image-picker";
import { COLORS, FONTS, SIZES } from "@/constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useUser } from "@clerk/clerk-expo";

const ProfileSection = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const { user } = useUser(); // Get the current user from the Clerk context
  const userName = user?.fullName.toUpperCase() || "No Full Name";
  const SecondTextColor = isDarkTheme ? "#ffffff" : "#0066FF";
  const ThirdTextColor = isDarkTheme ? "#0066FF" : "#ffffff";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const navigation = useNavigation();
  const IconBackgroundColor = isDarkTheme ? "#252829" : "#f0f0f0";
  const ImageBorderColor = isDarkTheme ? "#ffffff" : "#ffffff";
  const userProfile = user?.imageUrl;
  const [selectedImage, setSelectedImage] = useState(userProfile);
  const [selectedBgImage, setSelectedBgImage] = useState(imageDataURL[0]);

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      Alert.alert("Image Has Been Successfully Changed");
    }
  };
  const handleBgImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedBgImage(result.assets[0].uri);
    } else {
      Alert.alert("Image Has Been Successfully Changed");
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: ScreenBackgroundColor,
        },
      ]}
    >
      <View
        style={[
          styles.headerContainer,
          {
            backgroundColor: ScreenBackgroundColor,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.iconContainer,
            { backgroundColor: IconBackgroundColor },
          ]}
          onPress={() => navigation.openDrawer()}
        >
          <Icon name="menu" size={24} color={TextColor} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: TextColor }]}>Profile</Text>
      </View>
      <TouchableOpacity onPress={handleBgImageSelection}>
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: selectedBgImage }}
            resizeMode="cover"
            style={{
              height: 228,
              width: "100%",
            }}
          />
        </View>
      </TouchableOpacity>

      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity onPress={handleImageSelection}>
          <Image
            source={{ uri: selectedImage }}
            resizeMode="cover"
            style={{
              height: 155,
              width: 155,
              borderRadius: 999,
              borderColor: ImageBorderColor,
              borderWidth: 2,
              marginTop: -90,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.h3,
            color: SecondTextColor,
            marginVertical: 8,
            fontWeight: "700",
            fontSize: 20,
            marginLeft: 10,
          }}
        >
          {userName}
        </Text>

        <Text
          style={{
            ...FONTS.body4,
            color: TextColor,
            marginVertical: 8,
            fontWeight: "600",
          }}
        >
          Graphics Designer
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="location-on" size={18} color={TextColor} />
          <Text
            style={{
              ...FONTS.body4,
              marginLeft: 4,
              fontWeight: "500",
              color: TextColor,
            }}
          >
            {" "}
            Prestea , Ghana{" "}
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 8,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: SecondTextColor,
                fontWeight: "700",
              }}
            >
              122
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: TextColor,
                fontWeight: "500",
              }}
            >
              Dangers
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginHorizontal: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: SecondTextColor,
                fontWeight: "700",
              }}
            >
              67
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: TextColor,
                fontWeight: "500",
              }}
            >
              Emergencies
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h2,
                color: SecondTextColor,
                fontWeight: "700",
              }}
            >
              10
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                color: TextColor,
                fontWeight: "500",
              }}
            >
              Places
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[styles.Btn, { backgroundColor: SecondTextColor }]}
          >
            <Text style={{ color: ThirdTextColor, fontWeight: "600" }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.Btn, { backgroundColor: SecondTextColor }]}
          >
            <Text style={{ color: ThirdTextColor, fontWeight: "600" }}>
              Add Contacts
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",

    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 100,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  rightIconsContainer: {
    flexDirection: "row",
  },
  profileContainer: {
    width: "100%",
  },
  Btn: {
    width: 124,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: SIZES.padding * 2,
  },
});
