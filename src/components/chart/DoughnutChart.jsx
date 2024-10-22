import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const data = {
  labels: ["likes", "comments", "shares", "reactions_count"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
      ],
      hoverOffset: 2,
    },
  ],
};

export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
