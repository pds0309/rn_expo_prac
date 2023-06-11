import { Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/dateHandler";
import { useContext, useEffect, useMemo } from "react";
import { ExpensesContext } from "../store/expenseContext";
import { fetchExpense } from "../utils/httpHandler";

const RecentExpense = () => {
  const { expenses, setExpense } = useContext(ExpensesContext);
  useEffect(() => {
    (async () => {
      const expenses = await fetchExpense();
      setExpense(expenses);
    })();
  }, []);
  const recentExpenses = expenses.filter((expense) => {
    return expense.date > getDateMinusDays(new Date(), 7);
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensePeriod="Last 7 days" />
  );
};

export default RecentExpense;
