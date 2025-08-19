import { useState } from "react";
import BarChart from "../components/BarChart";

const MonthlyView = () => {
  const [month, setMonth] = useState(() => new Date().toISOString().slice(0, 7)); // YYYY-MM

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Monthly Expense Overview</h2>
        <input
          type="month"
          className="mt-2 sm:mt-0 px-3 py-2 border rounded"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>

      <BarChart month={month} />
    </div>
  );
};

export default MonthlyView;
