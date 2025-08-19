import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // update if hosted
});

export const fetchExpenses = () => API.get("/expenses");
export const addExpense = (data) => API.post("/expenses", data);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);
