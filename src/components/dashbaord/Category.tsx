import { CategoryType } from "@/lib/data";
import Widget from "./Widget";
import AddWidget from "./AddWidget";
import { useDashboardContext } from "@/context/DashbaordContext";

const Category = ({ name, widgets, id }: CategoryType) => {
  const { removeWidget } = useDashboardContext();
  return (
    <div>
      <h3 className="text-lg font-semibold mb-5">{name}</h3>
      <div className="flex gap-5 overflow-x-auto">
        {widgets
          .filter((each) => each.show)
          .map((widget) => (
            <Widget
              {...widget}
              key={widget.id}
              close={() => removeWidget(widget.id, id)}
            />
          ))}
        <AddWidget categoryId={id} />
      </div>
    </div>
  );
};

export default Category;
