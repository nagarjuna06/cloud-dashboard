import { categoriesData, CategoryType } from "@/lib/data";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextTypes = {
  categories?: CategoryType[];
  removeWidget: (widgetId: string, categoryId: string) => void;
};

const DashboardContext = createContext<ContextTypes>({
  categories: [],
  removeWidget: () => {},
});

export const DashboardContextProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCategories] = useState<CategoryType[]>();

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const removeWidget = (widgetId: string, categoryId: string) => {
    const updatedCategories = categories?.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.map((widget) => {
            if (widget.id === widgetId) {
              widget.show = !widget.show;
            }
            return widget;
          }),
        };
      }
      return category;
    });
    console.log(updatedCategories);

    setCategories(updatedCategories);
  };
  return (
    <DashboardContext.Provider value={{ categories, removeWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);
