import { useEffect, useState } from "react";
// import axios from "../services/api"; (coming soon)

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // TODO: Fetch from backend
    const dummy = [
      { _id: 1, amount: 500, category: "Food", date: "2025-08-05", description: "Lunch" },
      { _id: 2, amount: 300, category: "Travel", date: "2025-08-04", description: "Metro pass" },
    ];
    setExpenses(dummy);
  }, []);

  return (
    <div className="space-y-3">
      {expenses.map((exp) => (
        <div
          key={exp._id}
          className="border border-gray-200 p-3 rounded-lg flex justify-between items-center"
        >
          <div>
            <div className="font-semibold text-sm">{exp.category}</div>
            <div className="text-gray-600 text-xs">{exp.description}</div>
            <div className="text-gray-400 text-xs">{new Date(exp.date).toDateString()}</div>
          </div>
          <div className="font-bold text-green-600">₹ {exp.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
