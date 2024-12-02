//@ts-nocheck

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import Label from "./Label";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  responsive: true,
  indexAxis: "y",
  elements: {
    bar: {
      borderRadius: 50,
    },
  },
  scales: {
    x: {
      display: false,
      stacked: true,
      grid: {
        drawOnChartArea: false,
      },
    },
    y: {
      display: false,
      grid: {
        drawOnChartArea: false,
      },
      stacked: true,
      beginAtZero: true,
      ticks: {
        precision: 0,
      },
    },
  },

  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
};

const StackedBarChart = ({ data }: { data: ChartData<"bar"> }) => {
  const total = data.datasets.reduce((c, v) => c + v.data[0], 0);

  const labelData = data.datasets.map((each) => ({
    label: `${each.label} (${each.data[0]})`,
    color: each.backgroundColor as string,
  }));

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-lg font-bold">{total}</h3>{" "}
        <small className="text-sm">Total {data.labels[0] as string}</small>
      </div>
      <div className="rounded-full overflow-x-hidden">
        <Bar data={data} options={options} height={15} />
      </div>
      <div className="grid grid-cols-2 mt-3">
        {labelData.map((each, i) => (
          <Label key={i} {...each} />
        ))}
      </div>
    </div>
  );
};

export default StackedBarChart;
