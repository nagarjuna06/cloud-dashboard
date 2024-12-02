import { useDashboardContext } from "@/context/DashbaordContext";
import Category from "./Category";

const Section = () => {
  const { categories } = useDashboardContext();
  return (
    <div className="bg-[#f0f5fa] p-5 flex flex-col gap-5">
      {categories?.map((category) => (
        <Category {...category} key={category.id} />
      ))}
    </div>
  );
};

export default Section;
