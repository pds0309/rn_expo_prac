import { View, StyleSheet, Alert } from "react-native";
import Input from "../components/common/Input";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/common/Button";
import { screenStyles } from "../stylesheets/screenStyles";
import { layoutStyles } from "../stylesheets/layoutStyles";
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../apis/authApi";
import { useState } from "react";

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignupButtonPress = async () => {
    if (!password || !confirmPassword || password !== confirmPassword) {
      Alert.alert("check your password");
      return;
    }
    await createUser({ email, password });
  };

  const handlePasswordChange = (enteredPassword) => {
    setPassword(enteredPassword);
  };

  const handleEmailChange = (enteredEmail) => {
    setEmail(enteredEmail);
  };

  const handleConfirmPasswordChange = (enteredPassword) => {
    setConfirmPassword(enteredPassword);
  };

  const handleLoginButtonPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "LoginScreen" }],
    });
  };

  return (
    <View style={screenStyles.screenContainer}>
      <View style={layoutStyles.formContainer}>
        <Input
          label="Email"
          textInputConfig={{
            autoCapitalize: "none",
            keyboardType: "email-address",
            placeholder: "abc@abc.com",
            value: email,
            onChangeText: handleEmailChange,
          }}
        />
        <Input
          label="Password"
          textInputConfig={{
            autoCapitalize: "none",
            placeholder: "input password",
            secureTextEntry: true,
            value: password,
            onChangeText: handlePasswordChange,
          }}
        />
        <Input
          label="Confirm Password"
          textInputConfig={{
            autoCapitalize: "none",
            placeholder: "confirm your password",
            secureTextEntry: true,
            value: confirmPassword,
            onChangeText: handleConfirmPasswordChange,
          }}
        />
        <Button onPress={handleSignupButtonPress}>Signup</Button>
        <Button mode="flat" onPress={handleLoginButtonPress}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  loginBox: {
    rowGap: 18,
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary1,
  },
});
