//@ts-nocheck

import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Label from "./Label";

ChartJS.register(CategoryScale, Tooltip);

const options: ChartOptions<"doughnut"> = {
  borderColor: "transparent",
  plugins: {
    legend: false,
  },
  cutout: "70%",
};

const PieChart = ({ data }: { data: ChartData<"doughnut"> }) => {
  const total = data.datasets[0].data.reduce((c, v) => c + v, 0);

  const labelData = data.datasets[0].data.map((each, i) => ({
    label: `${data.labels[i]} (${each})`,
    color: data.datasets[0].backgroundColor[i],
  }));

  return (
    <div className="h-[220px] p-3 flex gap-16 items-center w-full">
      <div className="h-full relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-20 left-20 text-center">
          <p className="font-bold">{total}</p>
          <small className="text-[12px] relative bottom-3">Total</small>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {labelData.map((each, i) => (
          <Label key={i} {...each} />
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default PieChart;
