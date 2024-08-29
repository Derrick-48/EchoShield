import { StyleSheet } from "react-native";

// Define styles for the component
const HomeStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  greetingText: {
    fontSize: 18,
    color: "#6B7280",
  },
  greetingName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1F2937",
  },
  profileIcon: {
    marginLeft: "auto",
  },
  doctorCard: {
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  doctorOverviewCard: {
    flexDirection: "column",
    backgroundColor: "#0066FF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  doctorImage: {
    width: 70,
    height: 70,
    borderRadius: 34,
    borderWidth: 1,
    borderColor: "white",
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
  },
  doctorRole: {
    fontSize: 14,
    color: "#6B7280",
  },
  doctorSchedule: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "space-evenly",
  },
  scheduleText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#6B7280",
  },
  arrowIcon: {
    padding: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 8, // Space between the icon and the text input
    paddingLeft: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    padding: 20,
    color: "#1F2937",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  categoryButton: {
    alignItems: "center",
  },
  iconContainer: {
    padding: 20,
    borderRadius: 40, // Adjust the size if needed to fit the icon
    marginBottom: 5, // Adds space between the icon and the text
  },
  categoryText: {
    fontSize: 12,
    color: "#6B7280",
    fontWeight: "600",
  },
  nearDoctorCard: {
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  nearDoctorCardContainer: {
    flexDirection: "column",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  nearDoctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nearDoctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  nearDoctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1F2937",
  },
  nearDoctorRole: {
    fontSize: 14,
  },
  nearDoctorDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  nearDoctorDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  distanceText: {
    fontSize: 12,
    color: "#6B7280",
    marginRight: 10,
  },
  ratingText: {
    fontSize: 12,
    color: "#FBBF24",
    marginRight: 10,
  },
  availabilityText: {
    fontSize: 12,
    color: "#3B82F6",
  },
  separatorLine: {
    height: 1, // Line height
    backgroundColor: "#E5E7EB", // Line color, adjust as needed
    marginVertical: 5, // Space above and below the line
    width: "100%", // Make it full width to match the container
  },
});

export default HomeStyle;
