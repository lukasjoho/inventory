import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import AddProductForm from "./AddProductForm";

const AddProductDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Add Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add product</DialogTitle>
        </DialogHeader>
        <AddProductForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddProductDialog;
