import React from "react";
import OpenProductDialog from "./OpenProductDialog";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import SeedButton from "./SeedButton";
import { getProducts } from "@/lib/db";

const InventoryHeader = () => {
  return (
    <div className="flex justify-between w-full mb-8">
      <h1 className="text-2xl font-semibold">Inventory</h1>
      <OpenProductDialog>
        <Button className="flex gap-1.5">
          <PlusCircle className="w-4 h-4" />
          Create Product
        </Button>
      </OpenProductDialog>
    </div>
  );
};

export default InventoryHeader;
