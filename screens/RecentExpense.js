import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";

const RecentExpense = () => {
  return <ExpensesOutput expensePeriod="Last 7 days" />;
};

export default RecentExpense;
