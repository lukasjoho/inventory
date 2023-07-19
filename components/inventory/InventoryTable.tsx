import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { convertIntToDollar } from "@/lib/helpers";
import React from "react";
import { Switch } from "../ui/switch";
import { Badge } from "../ui/badge";

const InventoryTable = () => {
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
          <TableRow>
            <TableCell>cd12380kdjkasd0</TableCell>
            <TableCell className="font-medium">Portable Speaker</TableCell>
            <TableCell>
              Wireless portable speaker with a long battery life.
            </TableCell>
            <TableCell>{convertIntToDollar(80)}</TableCell>
            <TableCell>18</TableCell>
            <TableCell>
              <Switch />
            </TableCell>
            <TableCell>
              <Badge variant="secondary">Audio</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default InventoryTable;
