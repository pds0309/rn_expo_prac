import { useContext } from "react";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenseContext";

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expensesContext.expenses} expensePeriod="Total" />
  );
};

export default AllExpenses;
