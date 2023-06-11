import axios from "axios";

const baseInstance = axios.create({
  baseURL: "backend",
});

export const storeExpense = async (expenseData) => {
  const { data } = await baseInstance.post("/expenses.json", expenseData);
  return data.name;
};

export const fetchExpense = async () => {
  const { data } = await baseInstance.get("/expenses.json");
  return Object.entries(data).map(([key, value]) => ({
    id: key,
    ...value,
    date: new Date(value.date),
  }));
};

export const updateExpense = (id, expenseData) => {
  return baseInstance.put(`/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
  return baseInstance.delete(`/expenses/${id}.json`);
};
