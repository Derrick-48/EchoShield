import { StyleSheet } from "react-native";

const SignUpStyling = StyleSheet.create({
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
    color: "white",
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
    alignItems: "center", // This aligns content horizontally in the center
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: "700", // Bold font
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
    backgroundColor: "green", // Matches `bg-success-500`
  },
  successImage: {
    width: 110,
    height: 110,
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: "700", // Bold font
    textAlign: "center",
  },
  successMessage: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginTop: 10,
  },
});

export default SignUpStyling;
