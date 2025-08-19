import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import PieChart from "../components/PieChart";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Add Expense Form */}
      <div className="xl:col-span-1 bg-white rounded-2xl shadow p-5">
        <h2 className="text-xl font-semibold mb-4">Add Expense</h2>
        <ExpenseForm />
      </div>

      {/* Expense List */}
      <div className="xl:col-span-1 bg-white rounded-2xl shadow p-5 max-h-[70vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
        <ExpenseList />
      </div>

      {/* Pie Chart */}
      <div className="xl:col-span-1 bg-white rounded-2xl shadow p-5">
        <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
