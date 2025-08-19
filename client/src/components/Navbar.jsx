import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between">
      <h1 className="text-xl font-bold text-blue-600">Expense Tracker</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
        <Link to="/monthly" className="text-gray-700 hover:text-blue-500">Monthly</Link>
        <Link to="/yearly" className="text-gray-700 hover:text-blue-500">Yearly</Link>
      </div>
    </nav>
  );
};

export default Navbar;
