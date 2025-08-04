import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import CommonTitle from "../common/CommonTitle";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const BrandTrackingChart = () => {
  const data = {
    labels: [
      "2025-04-01",
      "2025-04-08",
      // "2025-04-15",
      // "2025-04-22",
      // "2025-04-30",
    ],
    datasets: [
      {
        label: "Levi's",
        data: [2, 1, 1, 1, 1],
        borderColor: "#e011c2",
        backgroundColor: "#e011c2",
        fill: false,
        tension: 0,
        pointRadius: 5,
      },
      {
        label: "Wrangler",
        data: [1, 2, 2, 2, 2],
        borderColor: "#3399ff",
        backgroundColor: "#3399ff",
        fill: false,
        tension: 0,
        pointRadius: 5,
      },
      {
        label: "3sixteen",
        data: [3, 3, 3, 3, 3],
        borderColor: "#cc4b2c",
        backgroundColor: "#cc4b2c",
        fill: false,
        tension: 0,
        pointRadius: 5,
      },
      {
        label: "Gap",
        data: [6, 5, 4, 4, 3],
        borderColor: "#70c9cc",
        backgroundColor: "#70c9cc",
        fill: false,
        tension: 0,
        pointRadius: 5,
      },
      {
        label: "Old Navy",
        data: [4, 4, 5, 5, 4],
        borderColor: "#f39237",
        backgroundColor: "#f39237",
        fill: false,
        tension: 0,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        reverse: true,
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
        title: {
          display: true,
          text: "Rank",
        },
      },
    },
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        marginTop: "16px",
      }}
    >
      {/* <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "left",
          marginLeft: "30px",
        }}
      ></div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "380px",
        }}
      >
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BrandTrackingChart;
