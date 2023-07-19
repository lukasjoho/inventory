"use client";
import React, { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ProductForm from "./ProductForm";
import { Plus, PlusCircle } from "lucide-react";
import { Product } from "@/lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface OpenProductDialogProps {
  product?: Product;
  children: JSX.Element;
}

const OpenProductDialog: FC<OpenProductDialogProps> = ({
  product,
  children,
}: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hidden md:block">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>{children}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {product ? "Edit product" : "Create product"}
              </DialogTitle>
            </DialogHeader>
            <ProductForm product={product} setOpen={setOpen} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>{children}</SheetTrigger>
          <SheetContent side={"bottom"}>
            <SheetHeader>
              <SheetTitle>
                {product ? "Edit product" : "Create product"}
              </SheetTitle>
            </SheetHeader>
            <ProductForm product={product} setOpen={setOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default OpenProductDialog;
