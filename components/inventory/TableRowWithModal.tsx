import { Category, ServerProduct } from "@/lib/types";
import React, { FC } from "react";

import { TableCell, TableRow } from "../ui/table";
import { convertIntToDollar } from "@/lib/helpers";
import { Badge } from "../ui/badge";
import OpenProductDialog from "./OpenProductDialog";

interface TableRowWithModalProps {
  product: ServerProduct;
}

const TableRowWithModal: FC<TableRowWithModalProps> = ({ product }) => {
  const { id, name, description, price, stock, visibility, category } = product;
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <OpenProductDialog product={product}>
        <TableCell className="cursor-pointer font-medium hover:underline">
          {name}
        </TableCell>
      </OpenProductDialog>

      <TableCell>{description}</TableCell>
      <TableCell>{convertIntToDollar(price)}</TableCell>
      <TableCell>{stock}</TableCell>
      <TableCell>
        <VisibilityIndicator visibility={visibility} />
      </TableCell>
      <TableCell>
        <CategoryBadge category={category} />
      </TableCell>
    </TableRow>
  );
};

export default TableRowWithModal;

interface CategoryBadgeProps {
  category: Category | undefined;
}

const CategoryBadge: FC<CategoryBadgeProps> = ({ category }) => {
  if (!category) {
    return "-";
  }
  return <Badge variant="secondary">{category.label}</Badge>;
};

interface VisibilityIndicatorProps {
  visibility: boolean;
}

const VisibilityIndicator: FC<VisibilityIndicatorProps> = ({ visibility }) => {
  if (!visibility) {
    return <div className="text-gray-400">Off</div>;
  }
  return <div className="text-green-500 ">On</div>;
};
