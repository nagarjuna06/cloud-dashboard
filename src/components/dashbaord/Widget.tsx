import { ChartType, WidgetType } from "@/lib/data";
import PieChart from "../charts/PieChart";
import { ChartData } from "chart.js";
import LineChart from "../charts/LineChart";
import StackedBarChart from "../charts/StackedChart";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const Widget = ({
  name,
  type,
  data,
  close,
}: WidgetType & { close: () => void }) => {
  const Chart = () => {
    switch (type) {
      case ChartType.pie:
        return <PieChart data={data as ChartData<"doughnut">} />;
      case ChartType.line:
        return <LineChart data={data as ChartData<"line">} />;
      case ChartType.bar:
        return <StackedBarChart data={data as ChartData<"bar">} />;
    }
  };
  return (
    <div className="inline-block">
      <div className="bg-white p-4 rounded-2xl w-[500px] group">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">{name}</h4>
          <Button size={"icon"} variant={"ghost"} onClick={close}>
            <X className="hidden group-hover:block" />
          </Button>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Widget;
