import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Food", "Travel", "Bills", "Entertainment"],
    datasets: [
      {
        label: "Expenses",
        data: [500, 300, 150, 200],
        backgroundColor: ["#60A5FA", "#F87171", "#34D399", "#FBBF24"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
