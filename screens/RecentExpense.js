import { Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";

const RecentExpense = () => {
  return <ExpensesOutput expensePeriod="Last 7 days" />;
};

export default RecentExpense;
