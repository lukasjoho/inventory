import { ServerCategory } from "@/lib/types";
import React from "react";
import { SelectItem } from "../ui/select";

const CategoryOptions = ({ options }: any) => {
  if (!options) {
    return <></>;
  }
  return (
    <div>
      {options.map((category: ServerCategory, idx: number) => {
        return (
          <SelectItem key={idx} value={category.id}>
            {category.name}
          </SelectItem>
        );
      })}
    </div>
  );
};

export default CategoryOptions;
