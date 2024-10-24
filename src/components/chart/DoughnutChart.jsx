import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export default function DoughnutChart({
  likes,
  comments,
  shares,
  reactions_count,
}) {
  const data = {
    labels: ["Likes", "Comments", "Shares", "Reactions Count"],
    datasets: [
      {
        label: "My First Dataset",
        data: [likes, comments, shares, reactions_count],
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

  return <Doughnut data={data} options={options} />;
}
