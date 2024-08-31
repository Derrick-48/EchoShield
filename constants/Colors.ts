const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
import { useTheme } from "@/Context/ThemeContext";

const { isDarkTheme } = useTheme();
export const TextColor = isDarkTheme ? "#ffffff" : "#000000";
export const ButtonColor = isDarkTheme ? "#ffffff" : "#0066FF";
export const ButtonTextColor = isDarkTheme ? "#000000" : "#ffffff";
export const ImageColor = isDarkTheme ? "#ffffff" : "#151718";
export const BorderColor = isDarkTheme ? "#ffffff" : "#151718";
export const ScreenBackgroundColor = isDarkTheme ? "#151718" : "#ffff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export default {
  primary: "#FF385C",
  grey: "#5E5D5E",
  dark: "#1A1A1A",
};
