import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ReactNativeModal } from "react-native-modal";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { fetchAPI } from "@/lib/fetch";
import { imageDataURL } from "@/constants/ImageData";

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

  console.log("Component initialized with states:", {
    form,
    verification,
    showSuccessModal,
  });

  const onSignUpPress = async () => {
    console.log("onSignUpPress called with form data:", form);
    if (!isLoaded) {
      console.log("Clerk is not loaded yet.");
      return;
    }

    try {
      console.log("Attempting to create a new sign up...");
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });
      console.log(
        "Sign up created successfully. Preparing email verification..."
      );
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({
        ...verification,
        state: "pending",
      });
      console.log("Verification state updated to 'pending':", verification);
    } catch (err) {
      console.error("Sign-up error:", JSON.stringify(err, null, 2));
      Alert.alert(
        "Error",
        err.errors[0]?.longMessage || "An error occurred during sign-up."
      );
    }
  };

  const onPressVerify = async () => {
    console.log(
      "onPressVerify called with verification code:",
      verification.code
    );
    if (!isLoaded) {
      console.log("Clerk is not loaded yet.");
      return;
    }

    try {
      console.log("Attempting email address verification...");
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      });

      console.log("Verification attempt result:", completeSignUp);
      if (completeSignUp.status === "complete") {
        console.log("Verification complete. Creating user in the database...");
        await fetchAPI("/(api)/user", {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: completeSignUp.createdUserId,
          }),
        });
        console.log("User created in the database successfully.");
        await setActive({ session: completeSignUp.createdSessionId });
        console.log("Session activated.");
        setVerification({
          ...verification,
          state: "success",
        });
        console.log("Verification state updated to 'success':", verification);
      } else {
        console.warn("Verification failed.");
        setVerification({
          ...verification,
          error: "Verification failed. Please try again.",
          state: "failed",
        });
      }
    } catch (err) {
      console.error("Verification error:", JSON.stringify(err, null, 2));
      setVerification({
        ...verification,
        error:
          err.errors[0]?.longMessage ||
          "An error occurred during verification.",
        state: "failed",
      });
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image
            source={{ uri: imageDataURL[6] }}
            className="z-0 w-full h-[250px]"
          />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => {
              console.log("Name input changed:", value);
              setForm({ ...form, name: value });
            }}
          />
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => {
              console.log("Email input changed:", value);
              setForm({ ...form, email: value });
            }}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => {
              console.log("Password input changed.");
              setForm({ ...form, password: value });
            }}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />
          <OAuth />

          <View className="flex-row justify-between mt-6">
            <Text>Already have an account? </Text>
            <Link
              href="/Sign-in"
              className="text-lg text-center text-general-200 mt-10"
              asChild
            >
              <TouchableOpacity>
                <Text className="text-primary-500">Log In</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* Verification Modal */}
        <ReactNativeModal
          isVisible={verification.state === "pending"}
          onBackdropPress={() => {
            console.log("Backdrop pressed - resetting verification state.");
            setVerification({ ...verification, state: "default" });
          }}
          onModalHide={() => {
            console.log(
              "Modal hide triggered. Current verification state:",
              verification.state
            );
            if (verification.state === "success") {
              console.log(
                "Verification was successful, showing success modal."
              );
              setShowSuccessModal(true);
            }
          }}
        >
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Text className="font-JakartaExtraBold text-2xl mb-2">
              Verification
            </Text>
            <Text className="font-Jakarta mb-5">
              We've sent a verification code to {form.email}.
            </Text>
            <InputField
              label={"Code"}
              icon={icons.lock}
              placeholder={"12345"}
              value={verification.code}
              keyboardType="numeric"
              onChangeText={(code) => {
                console.log("Verification code input changed:", code);
                setVerification({ ...verification, code });
              }}
            />
            {verification.error && (
              <Text className="text-red-500 text-sm mt-1">
                {verification.error}
              </Text>
            )}
            <CustomButton
              title="Verify Email"
              onPress={onPressVerify}
              className="mt-5 bg-success-500"
            />
          </View>
        </ReactNativeModal>

        {/* Success Modal */}
        <ReactNativeModal isVisible={showSuccessModal}>
          <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
            <Image
              source={images.check}
              className="w-[110px] h-[110px] mx-auto my-5"
            />
            <Text className="text-3xl font-JakartaBold text-center">
              Verified
            </Text>
            <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
              You have successfully verified your account.
            </Text>
            <CustomButton
              title="Browse Home"
              onPress={() => {
                console.log("Navigating to home after verification.");
                router.push(`/(Root)/(tabs)/home`);
              }}
              className="mt-5"
            />
          </View>
        </ReactNativeModal>
      </View>
    </ScrollView>
  );
};

export default SignUp;
