import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerTitle: "Login",
          presentation: "card",
        }}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: true,
          headerTitle: "Sign Up",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="sign-up/emailSignup"
        options={{
          headerShown: true,
          headerTitle: "Sign Up",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="sign-up/phone"
        options={{
          headerShown: true,
          headerTitle: "Sign Up",
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
