import { View, StyleSheet, Alert } from "react-native";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { screenStyles } from "../stylesheets/screenStyles";
import { layoutStyles } from "../stylesheets/layoutStyles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { login } from "../apis/authApi";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignupButtonPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "SignupScreen" }],
    });
  };

  const handlePasswordChange = (enteredPassword) => {
    setPassword(enteredPassword);
  };

  const handleEmailChange = (enteredEmail) => {
    setEmail(enteredEmail);
  };

  const handleLoginButtonPress = async () => {
    if (!email || !password) {
      Alert.alert("Check your email or password");
      return;
    }
    try {
      await login({ email, password });
    } catch {
      Alert.alert("Login Failed!");
    }
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
        <Button onPress={handleLoginButtonPress}>Login</Button>
        <Button mode="flat" onPress={handleSignupButtonPress}>
          Create new User
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
