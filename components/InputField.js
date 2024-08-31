import React from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 50}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ marginVertical: 8, width: "100%" }}>
          <Text
            style={[
              { fontSize: 18, marginBottom: 12, fontWeight: "600" },
              labelStyle,
            ]}
          >
            {label}
          </Text>
          <View
            style={[
              {
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                backgroundColor: "#F5F5F5",
                borderRadius: 25,
                borderWidth: 1,
                borderColor: "#F5F5F5",
                padding: 12,
              },
              containerStyle,
            ]}
          >
            {icon && (
              <Image
                source={icon}
                style={[{ width: 24, height: 24, marginLeft: 16 }, iconStyle]}
              />
            )}
            <TextInput
              style={[
                {
                  borderRadius: 25,
                  padding: 12,
                  fontSize: 15,
                  fontWeight: "600",
                  flex: 1,
                  textAlign: "left",
                },
                inputStyle,
              ]}
              secureTextEntry={secureTextEntry}
              placeholderTextColor={"black"}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
