import {
  StyleSheet,
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
import { Link, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { imageDataURL } from "@/constants/ImageData";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import { COLORS, FONTS } from "@/constants";

const EditProfileScreen = () => {
  const { isDarkTheme } = useTheme();
  const TextColor = isDarkTheme ? "#ffffff" : "#000000";
  const ButtonColor = isDarkTheme ? "#ffffff" : "#0066FF";
  const ButtonTextColor = isDarkTheme ? "#000000" : "#ffffff";
  const ImageColor = isDarkTheme ? "#ffffff" : "#151718";
  const BorderColor = isDarkTheme ? "#ffffff" : "#151718";
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";

  const [selectedImage, setSelectedImage] = useState(imageDataURL[0]);
  const [name, setName] = useState("Isaac Mensah");
  const [email, setEmail] = useState("isaacmensah@gmail.com");
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
    } else if (result.canceled) {
      Alert.alert("Image Has Been Successfully Changed");
    }
  };

  const renderDatePicker = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openStartDatePicker}
    >
      <View style={styles.modalContainer}>
        <View style={styles.datePickerContainer}>
          <DatePicker
            options={styles.datePickerOptions}
            mode="calendar"
            minimumDate={startDate}
            style={styles.datePicker}
            onDateChanged={handleChangeStartDate}
            onSelectedChange={(date) => setSelectedStartDate(date)}
          />
          <TouchableOpacity onPress={handleOnPressStartDate}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: ScreenBackgroundColor, paddingHorizontal: 22 },
      ]}
    >
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={TextColor}
          />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: TextColor }]}>
          Profile Edit
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={[styles.profileImage, { borderColor: BorderColor }]}
            />
            <View style={styles.cameraIconContainer}>
              <MaterialIcons name="photo-camera" size={32} color={ImageColor} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
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

          <View style={styles.inputWrapper}>
            <Text style={[styles.label, { color: TextColor }]}>
              Date of Birth
            </Text>
            <TouchableOpacity
              onPress={handleOnPressStartDate}
              style={[styles.input, { borderColor: BorderColor }]}
            >
              <Text style={{ color: TextColor }}>{selectedStartDate}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer, { backgroundColor: ButtonColor }]}
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
  <View style={styles.inputWrapper}>
    <Text style={[styles.label, { color: TextColor }]}>{label}</Text>
    <View style={[styles.input, { borderColor }]}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  headerText: {
    margin: 2,
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 22,
  },
  profileImage: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 2,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 10,
    zIndex: 9999,
  },
  inputContainer: {
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "column",
    marginBottom: 6,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
  },
  input: {
    height: 44,
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerContainer: {
    backgroundColor: COLORS.primary,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  datePicker: {
    borderRadius: 10,
  },
  datePickerOptions: {
    backgroundColor: COLORS.primary,
    textHeaderColor: COLORS.white,
    textDefaultColor: COLORS.white,
    selectedTextColor: COLORS.white,
    mainColor: "#469ab6",
    textSecondaryColor: COLORS.white,
    borderColor: "rgba(122, 146, 165, 0.1)",
  },
  closeButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    height: 44,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
