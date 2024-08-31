import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useTheme } from "@/Context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { FONTS } from "@/constants";
import { useUser } from "@clerk/clerk-expo";
import EditProfileStyling from "@/Styles_Theme/EditProfileStyle";

const EditProfileScreen = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const ButtonColor = isDarkTheme ? "#ffffff" : "#0066FF";
  const ButtonTextColor = isDarkTheme ? "#000000" : "#ffffff";
  const ImageColor = isDarkTheme ? "#ffffff" : "#151718";
  const BorderColor = isDarkTheme ? "#ffffff" : "#151718";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const { user, updateUser } = useUser(); // Get the current user from the Clerk context
  const userRealName = user?.fullName.toUpperCase() || "No Full Name";
  const userProfile = user?.imageUrl;
  const userName = user?.username || "No User Name";
  const initialEmail =
    user?.emailAddresses[0].emailAddress || "Email Not Found";
  const [selectedImage, setSelectedImage] = useState(userProfile);
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState("054-1234567");
  const [password, setPassword] = useState("password123");
  const [confirmPassword, setConfirmPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);
  const [country, setCountry] = useState("Ghana");
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("01/01/1990");
  const [startedDate, setStartedDate] = useState("01/01/1990");

  const handleChangeStartDate = (propDate) => {
    setStartedDate(propDate);
  };

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const renderDatePicker = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openStartDatePicker}
    >
      <View style={EditProfileStyling.modalContainer}>
        <View style={EditProfileStyling.datePickerContainer}>
          <DatePicker
            options={EditProfileStyling.datePickerOptions}
            mode="calendar"
            minimumDate={startDate}
            style={EditProfileStyling.datePicker}
            onDateChanged={handleChangeStartDate}
            onSelectedChange={(date) => setSelectedStartDate(date)}
          />
          <TouchableOpacity onPress={handleOnPressStartDate}>
            <Text style={EditProfileStyling.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView
      style={[
        EditProfileStyling.container,
        { backgroundColor: ScreenBackgroundColor, paddingHorizontal: 22 },
      ]}
    >
      <View style={EditProfileStyling.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={EditProfileStyling.backButton}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={TextColor}
          />
        </TouchableOpacity>
        <Text style={[EditProfileStyling.headerText, { color: TextColor }]}>
          Profile Edit
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={EditProfileStyling.profileImageContainer}>
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={[
                EditProfileStyling.profileImage,
                { borderColor: BorderColor },
              ]}
            />
            <View style={EditProfileStyling.cameraIconContainer}>
              <MaterialIcons name="photo-camera" size={32} color={ImageColor} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={EditProfileStyling.inputContainer}>
          {renderInputField("Name", name, setName, TextColor, BorderColor)}
          {renderInputField("Email", email, setEmail, TextColor, BorderColor)}
          {renderInputField(
            "Phone Number",
            phone,
            setPhone,
            TextColor,
            BorderColor
          )}
          {renderInputField(
            "Password",
            password,
            setPassword,
            TextColor,
            BorderColor,
            true
          )}
          {renderInputField(
            "Confirm Password",
            confirmPassword,
            setConfirmPassword,
            TextColor,
            BorderColor,
            true
          )}
          {renderInputField(
            "Country",
            country,
            setCountry,
            TextColor,
            BorderColor
          )}

          <View style={EditProfileStyling.inputWrapper}>
            <Text style={[EditProfileStyling.label, { color: TextColor }]}>
              Date of Birth
            </Text>
            <TouchableOpacity
              onPress={handleOnPressStartDate}
              style={[EditProfileStyling.input, { borderColor: BorderColor }]}
            >
              <Text style={{ color: TextColor }}>{selectedStartDate}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[
            EditProfileStyling.buttonContainer,
            { backgroundColor: ButtonColor },
          ]}
          onPress={() => Alert.alert("Changes Have Been Successfully  Saved")}
        >
          <Text
            style={{
              ...FONTS.body3,
              color: ButtonTextColor,
            }}
          >
            Save Changes
          </Text>
        </TouchableOpacity>
        {renderDatePicker()}
      </ScrollView>
    </SafeAreaView>
  );
};

const renderInputField = (
  label,
  value,
  setValue,
  TextColor,
  borderColor,
  isPassword = false
) => (
  <View style={EditProfileStyling.inputWrapper}>
    <Text style={[EditProfileStyling.label, { color: TextColor }]}>
      {label}
    </Text>
    <View style={[EditProfileStyling.input, { borderColor }]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        editable={true}
        secureTextEntry={isPassword}
        style={{
          width: "100%",
          color: TextColor,
        }}
      />
    </View>
  </View>
);

export default EditProfileScreen;
