import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const Graph = ({ labels }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

  const options = {
    responsive: true,
    scales: {
      x: {
        position: "bottom",
      },
      y: {
        position: "right",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      datasets: {
        position: "right",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: labels.map(() => Math.floor(Math.random() * (10 - 0)) + 0),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        position: "right",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Graph;
