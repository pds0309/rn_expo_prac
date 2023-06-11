import { View, StyleSheet } from "react-native";
import Input from "../components/common/Input";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/common/Button";
import { screenStyles } from "../stylesheets/screenStyles";
import { layoutStyles } from "../stylesheets/layoutStyles";

const SignupScreen = () => {
  return (
    <View style={screenStyles.screenContainer}>
      <View style={layoutStyles.formContainer}>
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Confirm Password" />
        <Button>Signup</Button>
        <Button mode="flat">Login</Button>
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
