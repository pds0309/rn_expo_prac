import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../ui/Button";
import { getFormattedDate } from "../../utils/dateHandler";

const defaultEmptyInputValues = {
  amount: "",
  date: "",
  description: "",
};

const ExpenseForm = ({ isEditing, onCancel, onSubmit, initialValues }) => {
  const [inputValues, setInputValues] = useState(
    initialValues
      ? {
          amount: initialValues.amount.toString(),
          date: getFormattedDate(initialValues.date),
          description: initialValues.description,
        }
      : defaultEmptyInputValues
  );

  const handleInputsChange = (inputIdentifier, enteredValue) => {
    setInputValues((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const handleSubmit = () => {
    const { amount, date, description } = inputValues;
    const expenseData = {
      amount: +amount,
      date: new Date(date),
      description,
    };
    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() !== "Invalid Date";
    const isDescValid = expenseData.description.trim().length > 0;
    if (!isAmountValid || !isDateValid || !isDescValid) {
      Alert.alert("Invalid Input!", "입력을 확인하세요");
      return;
    }
    onSubmit(expenseData);
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowinput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: inputValues["amount"],
            onChangeText: handleInputsChange.bind(this, "amount"),
          }}
        />
        <Input
          style={styles.rowinput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValues["date"],
            onChangeText: handleInputsChange.bind(this, "date"),
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          autoCapitalize: "none",
          value: inputValues["description"],
          onChangeText: handleInputsChange.bind(this, "description"),
        }}
      />
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={handleSubmit}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    marginVertical: 24,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowinput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});

export default ExpenseForm;
