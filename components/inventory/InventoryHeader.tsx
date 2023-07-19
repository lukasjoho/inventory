import React from "react";
import { Button } from "../ui/button";
import AddProductDialog from "./AddProductDialog";

const InventoryHeader = () => {
  return (
    <div className="flex justify-between w-full mb-8">
      <h1 className="text-2xl font-semibold">Inventory</h1>
      <AddProductDialog />
    </div>
  );
};

export default InventoryHeader;
