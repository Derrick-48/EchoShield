import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  useWindowDimensions,
  Alert,
} from "react-native";
import ReactNativeModal from "react-native-modal";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import SignUpStyling from "@/Styles_Theme/SignUpStyles";
import { useTheme } from "@/Context/ThemeContext";
import { useSignUp } from "@clerk/clerk-expo";
import { router } from "expo-router";
import PhoneNumberNameRoute from "./sign-up/phone";
import NameEmailPasswordRoute from "./sign-up/emailSignup";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Email Sign Up" },
    { key: "second", title: "Phone Sign Up" },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [phoneForm, setPhoneForm] = useState({
    phone: "",
    name: "",
  });

  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) return;
    try {
      if (index === 0) {
        // Email sign-up
        await signUp.create({
          emailAddress: form.email,
          password: form.password,
        });
        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });
        setVerification({ ...verification, state: "pending" });
      } else {
        // Phone sign-up
        await signUp.create({
          phoneNumber: phoneForm.phone,
        });
        await signUp.preparePhoneNumberVerification({ strategy: "phone_code" });
        setVerification({ ...verification, state: "pending" });
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;
    try {
      const completeSignUp =
        index === 0
          ? await signUp.attemptEmailAddressVerification({
              code: verification.code,
            })
          : await signUp.attemptPhoneNumberVerification({
              code: verification.code,
            });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({ ...verification, state: "success" });
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

  const renderScene = SceneMap({
    first: () => (
      <NameEmailPasswordRoute
        form={form}
        setForm={setForm}
        onSignUpPress={onSignUpPress}
      />
    ),
    second: () => (
      <PhoneNumberNameRoute
        phoneForm={phoneForm}
        setPhoneForm={setPhoneForm}
        onSignUpPress={onSignUpPress}
      />
    ),
  });

  const { isDarkTheme } = useTheme();
  const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";
  const FocusedLineColor = isDarkTheme ? "#0066FF" : "#0066FF";
  const TextLineColor = isDarkTheme ? "#ffffff" : "#0066FF";
  const FocusedTextLineColor = isDarkTheme ? "#FFFF00" : "#000000";
  const Layout = useWindowDimensions();

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: FocusedLineColor }}
      style={{ backgroundColor: ScreenBackgroundColor, height: 44 }}
      renderLabel={({ focused, route }) => (
        <Text
          style={{
            color: focused ? TextLineColor : FocusedTextLineColor,
            fontWeight: "500",
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: ScreenBackgroundColor,
      }}
    >
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Layout.width }}
        renderTabBar={renderTabBar}
      />
      <ReactNativeModal
        isVisible={verification.state === "pending"}
        onModalHide={() => {
          if (verification.state === "success") {
            setShowSuccessModal(true);
          }
        }}
      >
        <View style={SignUpStyling.modalContainer}>
          <Text style={SignUpStyling.modalHeader}>Verification</Text>
          <Text style={SignUpStyling.modalText}>
            We've sent a verification code to{" "}
            {index === 0 ? form.email : phoneForm.phone}.
          </Text>
          <InputField
            label="Code"
            placeholder="12345"
            icon={icons.lock}
            value={verification.code}
            keyboardType="numeric"
            onChangeText={(code) => setVerification({ ...verification, code })}
          />
          {verification.error && (
            <Text style={SignUpStyling.errorText}>{verification.error}</Text>
          )}
          <CustomButton
            title="Verify"
            onPress={onPressVerify}
            style={[SignUpStyling.button, SignUpStyling.verifyButton]}
          />
        </View>
      </ReactNativeModal>

      {/* Success Modal */}
      <ReactNativeModal isVisible={showSuccessModal}>
        <View style={SignUpStyling.modalContainer}>
          <Image source={images.check} style={SignUpStyling.successImage} />
          <Text style={SignUpStyling.successText}>Verified</Text>
          <Text style={SignUpStyling.successMessage}>
            You have successfully verified your account.
          </Text>
          <CustomButton
            title="Browse Home"
            onPress={() => router.replace("/(Root)/(tabs)/home")}
            style={SignUpStyling.button}
          />
        </View>
      </ReactNativeModal>
    </ScrollView>
  );
};

export default SignUp;
