import { View, Text, FlatList, StyleSheet } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of heads",
    amount: 88.29,
    date: new Date("2021-12-25"),
  },
  {
    id: "e3",
    description: "A pair of body",
    amount: 5.99,
    date: new Date("2021-12-31"),
  },
  {
    id: "e4",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e5",
    description: "A pair of heads",
    amount: 88.29,
    date: new Date("2021-12-25"),
  },
  {
    id: "e6",
    description: "A pair of body",
    amount: 5.99,
    date: new Date("2021-12-31"),
  },
  {
    id: "e7",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e8",
    description: "A pair of heads",
    amount: 88.29,
    date: new Date("2021-12-25"),
  },
  {
    id: "e9",
    description: "A pair of body",
    amount: 5.99,
    date: new Date("2021-12-31"),
  },
];

const ExpensesOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} periodName={expensePeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
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
});
