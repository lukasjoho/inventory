import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

import { getProducts } from "@/lib/db";
import TableRowWithModal from "./TableRowWithModal";
import SeedButton from "./SeedButton";

const InventoryTable = async () => {
  let products: any = [];

  products = await getProducts();
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Visibility</TableHead>
            <TableHead>Category</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product: any, idx: number) => {
            return <TableRowWithModal product={product} key={idx} />;
          })}
        </TableBody>
      </Table>
      {products.length < 1 && (
        <div className="w-full px-4 py-16 flex flex-col items-center text-center gap-2">
          <div>
            <h1 className="font-semibold text-lg">Empty table</h1>
            <p>No products are in the database.</p>
          </div>
          <SeedButton />
        </div>
      )}
    </div>
  );
};

export default InventoryTable;
