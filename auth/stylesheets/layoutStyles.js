import { StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

export const layoutStyles = StyleSheet.create({
  formContainer: {
    rowGap: 18,
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderRadius: 6,
    backgroundColor: GlobalStyles.colors.primary1,
  },
});
