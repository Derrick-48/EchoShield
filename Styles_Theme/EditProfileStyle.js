import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "@/constants";

const EditProfileStyling = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  headerText: {
    margin: 2,
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "bold",
  },
  profileImageContainer: {
    alignItems: "center",
    marginVertical: 22,
  },
  profileImage: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 2,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 10,
    zIndex: 9999,
  },
  inputContainer: {
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "column",
    marginBottom: 6,
  },
  label: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
  },
  input: {
    height: 44,
    width: "100%",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 6,
    justifyContent: "center",
    paddingLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerContainer: {
    backgroundColor: COLORS.primary,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  datePicker: {
    borderRadius: 10,
  },
  datePickerOptions: {
    backgroundColor: COLORS.primary,
    textHeaderColor: COLORS.white,
    textDefaultColor: COLORS.white,
    selectedTextColor: COLORS.white,
    mainColor: "#469ab6",
    textSecondaryColor: COLORS.white,
    borderColor: "rgba(122, 146, 165, 0.1)",
  },
  closeButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    height: 44,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditProfileStyling;
