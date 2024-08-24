import React, { useState } from "react";
import { Link, router } from "expo-router";
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ReactNativeModal } from "react-native-modal";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSignUpPress = () => {
         router.replace ("(Root)/(tabs)");
  };

  const onPressVerify = () => {
    // Replace with actual verification logic
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.signUpCar} style={styles.image} />
        <Text style={styles.headerText}>Create Your Account</Text>
      </View>

      <View style={styles.formContainer}>
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
          style={styles.button}
        />
        {/* Insert OAuth component here */}
        <Link href="(auth)" style={styles.link}>
          Already have an account?{" "}
          <Text style={styles.signInText}>Log In</Text>
        </Link>
      </View>

      <ReactNativeModal
        isVisible={verification.state === "pending"}
        onModalHide={() => {
          if (verification.state === "success") {
            setShowSuccessModal(true);
          }
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Verification</Text>
          <Text style={styles.modalText}>
            We've sent a verification code to {form.email}.
          </Text>
          <InputField
            label="Code"
            placeholder="12345"
            icon={icons.lock}
            value={verification.code}
            keyboardType="numeric"
            onChangeText={(code) =>
              setVerification({ ...verification, code })
            }
          />
          {verification.error && (
            <Text style={styles.errorText}>{verification.error}</Text>
          )}
          <CustomButton
            title="Verify Email"
            onPress={onPressVerify}
            style={[styles.button, styles.verifyButton]}
          />
        </View>
      </ReactNativeModal>

      <ReactNativeModal isVisible={showSuccessModal}>
        <View style={styles.modalContainer}>
          <Image source={images.check} style={styles.successImage} />
          <Text style={styles.successText}>Verified</Text>
          <Text style={styles.successMessage}>
            You have successfully verified your account.
          </Text>
          <CustomButton
            title="Browse Home"
            onPress={() => {
              // Navigate to home
            }}
            style={styles.button}
          />
        </View>
      </ReactNativeModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: 250,
  },
  headerText: {
    position: "absolute",
    bottom: 20,
    left: 20,
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
  formContainer: {
    padding: 20,
  },
  button: {
    backgroundColor: "#0286FF",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  link: {
    textAlign: "center",
    fontSize: 16,
    color: "#777",
    marginTop: 20,
  },
  signInText: {
    color: "#0286FF",
    fontWeight: "600",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
  },
  verifyButton: {
    backgroundColor: "green",
  },
  successImage: {
    width: 110,
    height: 110,
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  successMessage: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 10,
  },
});

export default SignUp;
