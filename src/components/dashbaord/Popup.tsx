import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useDashboardContext } from "@/context/DashbaordContext";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

type Props = {
  categoryId: string;
} & PropsWithChildren;

const Popup = ({ children, categoryId }: Props) => {
  const [curId, setCurId] = useState<string>("");
  const { categories, removeWidget } = useDashboardContext();
  useEffect(() => {
    setCurId(categoryId);
  }, [categoryId]);

  const category = useMemo(() => {
    return categories?.find((each) => each.id === curId);
  }, [curId, categories]);

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>Add Widget</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <p className=" mb-3">
            Personalize your dashboard by adding the following widget.
          </p>
          <div>
            {categories?.map((each) => (
              <Button
                onClick={() => setCurId(each.id)}
                variant={"ghost"}
                className={cn("border-b-2 rounded-none", {
                  "border-[#14147d] text-[#14147d]": each.id === curId,
                })}
                key={each.id}
              >
                {each.short_name}
              </Button>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-3">
            {category?.widgets.map((each) => (
              <div
                key={each.id}
                className="flex gap-2 items-center p-3 border rounded"
              >
                <Checkbox
                  checked={each.show}
                  value={each.id}
                  id={each.id}
                  onClick={() => removeWidget(each.id, curId)}
                />
                <label htmlFor={each.id}>{each.name}</label>
              </div>
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default Popup;
