import React, { useState } from "react";
import { Link } from "expo-router";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={images.signUpCar} style={styles.image} />
        <Text style={styles.welcomeText}>Welcome 👋</Text>
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

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.oauthContainer}>
          <Text style={styles.oauthText}>Or sign in with</Text>
          {/* Add your OAuth buttons here */}
        </View>

        <Link href="/SignUp" style={styles.link}>
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
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: 250,
  },
  welcomeText: {
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
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  oauthContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  oauthText: {
    fontSize: 16,
    color: "#777",
  },
  link: {
    textAlign: "center",
    fontSize: 16,
    color: "#777",
    marginTop: 20,
  },
  signUpText: {
    color: "#0286FF",
    fontWeight: "600",
  },
});

export default SignIn;
