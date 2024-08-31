import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import Onboarding from "./(auth)"; // Import the Onboarding component
import { Redirect } from "expo-router";

const HomeScreen = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href="/(Root)/(tabs)/home" />;

  return <Redirect href="/(auth)" />;
};

export default HomeScreen;
