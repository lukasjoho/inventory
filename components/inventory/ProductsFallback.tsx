import React from "react";
import { Skeleton } from "../ui/skeleton";

const ProductsFallback = () => {
  return (
    <div>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  );
};

export default ProductsFallback;
