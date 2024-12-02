import {
  ArcElement,
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  Tooltip,
  Legend,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement
);

const options: ChartOptions<"line"> = {
  plugins: {
    legend: {
      position: "top",
      align: "center",
    },
  },
};

const LineChart = ({ data }: { data: ChartData<"line"> }) => {
  return <Line data={data} options={options} />;
};

export default LineChart;
