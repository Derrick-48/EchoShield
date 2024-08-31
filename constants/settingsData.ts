import { Alert } from "react-native";

export const settingsSections = [
  {
    title: "Account",
    items: [
      {
        icon: "account-circle",
        route: "/Settings/editProfile",
        text: "Edit Profile",
      },
      { icon: "security", route: "/Settings/securityRoom", text: "Security" },
      {
        icon: "notifications-none",
        route: "/Settings/notifiedSettings",
        text: "Notifications",
      },
      { icon: "lock-outline", route: "/Settings/privacy", text: "Privacy" },
    ],
  },
  {
    title: "Support & About",
    items: [
      {
        icon: "credit-card",
        route: "/Settings/subscription",
        text: "My Subscription",
      },
      {
        icon: "help-outline",
        route: "/Settings/support",
        text: "Help & Support",
      },
      {
        icon: "info-outline",
        route: "/Settings/TermsAndPolicies",
        text: "Terms and Policies",
      },
    ],
  },
  {
    title: "Cache & Cellular",
    items: [
      {
        icon: "delete-outline",
        action: () => Alert.alert("Space Freed"),
        text: "Free Up Space",
      },
      { icon: "save-alt", route: "/Settings/dataSaver", text: "Data Saver" },
    ],
  },
  {
    title: "Actions",
    items: [
      {
        icon: "outlined-flag",
        route: "/Settings/reportProblem",
        text: "Report a problem",
      },
      {
        icon: "people-outline",
        route: "/Settings/addAccount",
        text: "Add account",
      },
      {
        icon: "logout",
        action: () => Alert.alert("You've Successfully Logged Out"),
        text: "Log out",
      },
    ],
  },
];
