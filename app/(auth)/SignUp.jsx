import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { ReactNativeModal } from "react-native-modal";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { fetchAPI } from "@/lib/fetch";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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

  const onSignUpPress = async () => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({
        ...verification,
        state: "pending",
      });
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });
      if (completeSignUp.status === "complete") {
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          }),
        });
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({
          ...verification,
          state: "success",
        });
      } else {
        setVerification({
          ...verification,
          error: "Verification failed. Please try again.",
          state: "failed",
        });
      }
    } catch (err) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed",
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      s
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 50}
    >
      <ScrollView style={styles.container}>
        <View style={styles.container}>
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
              style={styles.signUpButton}
            />
            <OAuth />
            <Link href="/" style={styles.signInLink}>
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
                label={"Code"}
                icon={icons.lock}
                placeholder={"12345"}
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
                style={styles.verifyButton}
              />
            </View>
          </ReactNativeModal>
          <ReactNativeModal isVisible={showSuccessModal}>
            <View style={styles.modalContainer}>
              <Image source={images.check} style={styles.successImage} />
              <Text style={styles.verifiedText}>Verified</Text>
              <Text style={styles.successMessage}>
                You have successfully verified your account.
              </Text>
              <CustomButton
                title="Browse Home"
                onPress={() => router.push(`/(root)/(tabs)/home`)}
                style={styles.browseHomeButton}
              />
            </View>
          </ReactNativeModal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    zIndex: 0,
  },
  headerText: {
    fontSize: 24,
    color: "black",
    fontFamily: "JakartaSemiBold",
    position: "absolute",
    fontWeight: "600",
    bottom: 5,
    left: 5,
  },
  formContainer: {
    padding: 20,
  },
  signUpButton: {
    marginTop: 20,
  },
  signInLink: {
    fontSize: 18,
    textAlign: "center",
    color: "#6B7280", // General-200
    marginTop: 40,
  },
  signInText: {
    color: "#3B82F6", // Primary-500
  },
  modalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 28,
    paddingVertical: 36,
    borderRadius: 20,
    minHeight: 300,
  },
  modalHeader: {
    fontFamily: "JakartaExtraBold",
    fontSize: 24,
    marginBottom: 8,
  },
  modalText: {
    fontFamily: "Jakarta",
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
  verifyButton: {
    marginTop: 20,
    backgroundColor: "#10B981", // Success-500
  },
  successImage: {
    width: 110,
    height: 110,
    alignSelf: "center",
    marginVertical: 20,
  },
  verifiedText: {
    fontSize: 24,
    fontFamily: "JakartaBold",
    textAlign: "center",
  },
  successMessage: {
    fontSize: 16,
    color: "#9CA3AF", // Gray-400
    fontFamily: "Jakarta",
    textAlign: "center",
    marginTop: 8,
  },
  browseHomeButton: {
    marginTop: 20,
  },
});

export default SignUp;
