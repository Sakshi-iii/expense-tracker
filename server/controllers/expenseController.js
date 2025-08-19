const Expense = require("../models/Expense");

// Get all expenses
exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.json(expenses);
};

// Add expense
exports.addExpense = async (req, res) => {
  const { amount, category, description, date } = req.body;
  const newExpense = new Expense({ amount, category, description, date });
  await newExpense.save();
  res.status(201).json(newExpense);
};

// Delete expense
exports.deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
};
