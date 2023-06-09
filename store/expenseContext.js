import { createContext, useReducer } from "react";

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
    date: new Date("2023-06-01"),
  },
  {
    id: "e9",
    description: "A pair of body",
    amount: 5.99,
    date: new Date("2023-06-03"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      return [...state].map((s) =>
        s.id === action.payload.id ? { ...s, ...action.payload.data } : s
      );
    case "DELETE":
      return [...state].filter((s) => s.id !== action.payload);
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpenseContextProvider;
