import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement
);

export default function BarChart({
  score1 = 0,
  score2 = 0,
  score3 = 0,
  label1,
  label2,
  label3,
}) {
  const labels = [label1, label2, label3];
  const num = [score1, score2, score3];

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        min: 0,
        max: 2,
        title: {
          display: true,
          text: "Valor",
        },
      },
      y: {
        ticks: { color: "rgb(0,0,0)" },
        title: {
          display: true,
          text: "Emocion ",
        },
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: num,
        backgroundColor: "rgba(169, 145, 225 )",
        hoverBackgroundColor: "rgba(155, 112, 255, 0.6)",
      },
    ],
  };

  return <Bar data={data} options={options} />;
}
