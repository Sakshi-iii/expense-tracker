import { useState } from "react";

const ExpenseForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const categories = ["Food", "Travel", "Bills", "Shopping", "Entertainment", "Health", "Others"];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Send to backend via Axios
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Amount (₹)</label>
        <input
          type="number"
          name="amount"
          required
          value={formData.amount}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          name="category"
          required
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <input
          type="text"
          name="description"
          required
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
