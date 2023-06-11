import { Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utils/dateHandler";
import { useContext, useEffect, useMemo, useState } from "react";
import { ExpensesContext } from "../store/expenseContext";
import { fetchExpense } from "../utils/httpHandler";
import LoadOverlay from "../components/ui/LoadOverlay";

const RecentExpense = () => {
  const { expenses, setExpense } = useContext(ExpensesContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const expenses = await fetchExpense();
      setIsLoading(false);
      setExpense(expenses);
    })();
  }, []);
  const recentExpenses = expenses.filter((expense) => {
    return expense.date > getDateMinusDays(new Date(), 7);
  });
  if (isLoading) {
    return <LoadOverlay />;
  }
  return (
    <ExpensesOutput expenses={recentExpenses} expensePeriod="Last 7 days" />
  );
};

export default RecentExpense;
