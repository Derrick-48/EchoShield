import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import SignUpStyling from "@/Styles_Theme/SignUpStyles";
import { Link } from "expo-router";
import { imageDataURL } from "@/constants/ImageData";

const PhoneNumberNameRoute = ({ phoneForm, setPhoneForm, onSignUpPress }) => {
  return (
    <ScrollView
      style={SignUpStyling.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={SignUpStyling.imageContainer}>
        <Image source={{ uri: imageDataURL[6] }} style={SignUpStyling.image} />
        <Text
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            fontSize: 24,
            fontWeight: "600",
            color: "white",
          }}
        >
          Welcome 👋
        </Text>
      </View>

      <View style={SignUpStyling.formContainer}>
        <InputField
          label="Phone Number"
          placeholder="Enter phone number"
          icon={icons.profile}
          value={phoneForm.phone}
          onChangeText={(value) => setPhoneForm({ ...phoneForm, phone: value })}
        />
        <InputField
          label="Name"
          placeholder="Enter name"
          icon={icons.person}
          value={phoneForm.name}
          onChangeText={(value) => setPhoneForm({ ...phoneForm, name: value })}
        />
        <CustomButton
          title="Sign Up"
          onPress={onSignUpPress}
          style={SignUpStyling.button}
        />
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 10,
            alignContent: "center",
            alignSelf: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 17 }}>Already have an account?{"  "}</Text>
          <Link href="(auth)" asChild>
            <TouchableOpacity>
              <Text style={[SignUpStyling.signInText, { fontSize: 17 }]}>
                Log In
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default PhoneNumberNameRoute;
