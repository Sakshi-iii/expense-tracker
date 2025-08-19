import { useState } from "react";
import BarChart from "../components/BarChart";

const YearlyView = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="bg-white p-5 rounded-2xl shadow">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Yearly Expense Overview</h2>
        <select
          className="mt-2 sm:mt-0 px-3 py-2 border rounded"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <BarChart year={year} />
    </div>
  );
};

export default YearlyView;
