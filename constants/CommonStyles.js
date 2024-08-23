/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";
import { useTheme } from "../Context/ThemeContext";

export const useCommonStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    text: {
      fontSize: 18,
      color: theme.colors.text,
    },
    button: {
      color: theme.colors.primary,
    },
  });
};
