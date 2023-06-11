import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig, style }) => {
  const inputStyle = textInputConfig.multiline
    ? [styles.input, styles.inputMultiline]
    : [styles.input];
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
  },
  input: {
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  inputMultiline: {
    minHeight: 100,
    // should set textAlignVertical for same behavior in both platform
    textAlignVertical: "top",
  },
});
