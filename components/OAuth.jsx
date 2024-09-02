import { useOAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { Alert, Image, Text, View, StyleSheet } from "react-native";
import CustomButton from "@/components/CustomButton";
import { icons } from "@/constants";
import { googleOAuth } from "@/lib/auth";
import ReactNativeModal from "react-native-modal";

const OAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleGoogleSignIn = async () => {
    const result = await googleOAuth(startOAuthFlow);

    if (result.code === "session_exists" || result.code === "success") {
      router.replace("/(Root)/(tabs)/home");
    } else {
      setShowSuccessModal(true);
    }
  };
  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push("/(Root)/(tabs)/home");
  };

  return (
    <View>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>Or</Text>
        <View style={styles.separator} />
      </View>

      <CustomButton
        title="Log In with Google"
        style={styles.button}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            style={styles.googleIcon}
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
      />
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
            onPress={handleCloseModal}
            className="mt-5"
          />
        </View>
      </ReactNativeModal>
    </View>
  );
};

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    gap: 12,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E5E5", // Example color; replace with actual color
  },
  separatorText: {
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    width: "100%",
    shadowOpacity: 0, // Example style to remove shadow
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
});

export default OAuth;
