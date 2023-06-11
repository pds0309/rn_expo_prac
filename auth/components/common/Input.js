import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {},
  label: {
    marginBottom: 4,
    fontSize: 12,
    color: "white",
  },
  input: {
    padding: 6,
    fontSize: 14,
    backgroundColor: GlobalStyles.colors.primary2,
    borderRadius: 6,
  },
});
