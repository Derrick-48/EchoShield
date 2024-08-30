import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import SignUpStyling from "@/Styles_Theme/SignUpStyles";
import { Link, router } from "expo-router";
import { imageDataURL } from "@/constants/ImageData";

const NameEmailPasswordRoute = ({ form, setForm, onSignUpPress }) => {
  return (
    <ScrollView
      style={SignUpStyling.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={SignUpStyling.imageContainer}>
        <Image source={{ uri: imageDataURL[5] }} style={SignUpStyling.image} />
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
          label="Name"
          placeholder="Enter name"
          icon={icons.person}
          value={form.name}
          onChangeText={(value) => setForm({ ...form, name: value })}
        />
        <InputField
          label="Email"
          placeholder="Enter email"
          icon={icons.email}
          textContentType="emailAddress"
          value={form.email}
          onChangeText={(value) => setForm({ ...form, email: value })}
        />
        <InputField
          label="Password"
          placeholder="Enter password"
          icon={icons.lock}
          secureTextEntry={true}
          textContentType="password"
          value={form.password}
          onChangeText={(value) => setForm({ ...form, password: value })}
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

export default NameEmailPasswordRoute;
