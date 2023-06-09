import { Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/dateHandler";
import { useContext, useMemo } from "react";
import { ExpensesContext } from "../store/expenseContext";

const RecentExpense = () => {
  const expensesContext = useContext(ExpensesContext);
  const recentExpenses = expensesContext.expenses.filter((expense) => {
    return expense.date > getDateMinusDays(new Date(), 7);
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensePeriod="Last 7 days" />
  );
};

export default RecentExpense;
