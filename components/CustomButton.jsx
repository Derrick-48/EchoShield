import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const getBgVariantStyle = (variant) => {
  switch (variant) {
    case "secondary":
      return styles.bgSecondary;
    case "danger":
      return styles.bgDanger;
    case "success":
      return styles.bgSuccess;
    case "outline":
      return styles.bgOutline;
    default:
      return styles.bgPrimary;
  }
};

const getTextVariantStyle = (variant) => {
  switch (variant) {
    case "primary":
      return styles.textPrimary;
    case "secondary":
      return styles.textSecondary;
    case "danger":
      return styles.textDanger;
    case "success":
      return styles.textSuccess;
    default:
      return styles.textDefault;
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        getBgVariantStyle(bgVariant),
        style,
      ]}
      {...props}
    >
      {IconLeft && <View style={styles.iconLeft}>{<IconLeft />}</View>}
      <Text style={[styles.text, getTextVariantStyle(textVariant)]}>
        {title}
      </Text>
      {IconRight && <View style={styles.iconRight}>{<IconRight />}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 25,
    padding: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#666",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bgPrimary: {
    backgroundColor: "#0286FF",
  },
  bgSecondary: {
    backgroundColor: "#6B7280",
  },
  bgDanger: {
    backgroundColor: "#EF4444",
  },
  bgSuccess: {
    backgroundColor: "#10B981",
  },
  bgOutline: {
    backgroundColor: "transparent",
    borderColor: "#D1D5DB",
    borderWidth: 0.5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textDefault: {
    color: "#FFF",
  },
  textPrimary: {
    color: "#000",
  },
  textSecondary: {
    color: "#F3F4F6",
  },
  textDanger: {
    color: "#FEE2E2",
  },
  textSuccess: {
    color: "#D1FAE5",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default CustomButton;
