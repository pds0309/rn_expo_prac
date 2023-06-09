import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenseContext";
import ExpenseForm from "../components/manageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const { addExpense, deleteExpense, updateExpense, expenses } =
    useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const selectedExpense = expenses.find((ex) => ex.id === editedExpenseId);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const handleDeleteExpensePress = () => {
    deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const handleCancelPress = () => {
    navigation.goBack();
  };

  const handleConfirmPress = (expenseData) => {
    isEditing
      ? updateExpense(editedExpenseId, expenseData)
      : addExpense(expenseData);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        initialValues={selectedExpense}
        isEditing={isEditing}
        onSubmit={handleConfirmPress}
        onCancel={handleCancelPress}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={handleDeleteExpensePress}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    alignItems: "center",
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
  },
});
