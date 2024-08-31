import React, { useCallback, useState } from "react";
import { Alert, Image, ScrollView, Text, View, StyleSheet } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";

import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { imageDataURL } from "@/constants/ImageData";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(Root)/(tabs)/home");
      } else {
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Log in failed. Please try again.");
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form, signIn, setActive]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: imageDataURL[5] }} style={styles.headerImage} />
        <Text style={styles.headerText}>Welcome 👋</Text>
      </View>

      <View style={styles.formContainer}>
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
          title="Sign In"
          onPress={onSignInPress}
          style={styles.signInButton}
        />

        <OAuth />

        <Link href="/SignUp" style={styles.signUpLink}>
          Don't have an account? <Text style={styles.signUpText}>Sign Up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  headerImage: {
    width: "100%",
    height: 250,
  },
  headerText: {
    position: "absolute",
    bottom: 5,
    left: 5,
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
  formContainer: {
    padding: 20,
  },
  signInButton: {
    marginTop: 24,
  },
  signUpLink: {
    fontSize: 18,
    textAlign: "center",
    color: "#6B7280", // Example color; replace with actual color
    marginTop: 20,
  },
  signUpText: {
    color: "#1D4ED8", // Example color; replace with actual color
  },
});

export default SignIn;
