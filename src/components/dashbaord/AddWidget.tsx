import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import Popup from "./Popup";

const AddWidget = ({ categoryId }: { categoryId: string }) => {
  return (
    <div className="inline-block">
      <div className="w-[500px] bg-white rounded-xl flex h-full justify-center items-center py-20 ">
        <Popup categoryId={categoryId}>
          <Button variant="outline">
            <Plus /> Add Widget
          </Button>
        </Popup>
      </div>
    </div>
  );
};

export default AddWidget;
