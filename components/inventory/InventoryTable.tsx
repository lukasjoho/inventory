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

const InventoryTable = async () => {
  const products = await getProducts();
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
          {products.map((product: any, idx: number) => {
            return <TableRowWithModal product={product} key={idx} />;
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryTable;
