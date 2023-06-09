import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensePeriod} />
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={styles.infoText}>
          No expenses registered for the last 7 days.
        </Text>
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "cneter",
    marginTop: 32,
  },
});
