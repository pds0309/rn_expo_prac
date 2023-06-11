import { View, StyleSheet } from "react-native";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { screenStyles } from "../stylesheets/screenStyles";
import { layoutStyles } from "../stylesheets/layoutStyles";

const LoginScreen = () => {
  return (
    <View style={screenStyles.screenContainer}>
      <View style={layoutStyles.formContainer}>
        <Input label="Email" />
        <Input label="Password" />
        <Button>Login</Button>
        <Button mode="flat">Create new User</Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
