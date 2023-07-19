"use client";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { ServerProduct } from "@/lib/types";
import { deleteProduct } from "@/lib/db";
import { toast } from "react-hot-toast";
import ToastBody from "../ui/toastbody";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
  product?: ServerProduct;
  setOpen?: (arg: boolean) => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({ product, setOpen }) => {
  const router = useRouter();
  const handleClick = async (e: any) => {
    e.preventDefault();

    const res = await deleteProduct(product?.id);
    console.log("ID: ", product?.id);
    if (res.ok) {
      toast.success(
        <ToastBody title="Success" message="Product successfully deleted." />
      );
      setOpen?.(false);
      router.refresh();
    } else {
      toast.error(
        <ToastBody title="Failure" message="Product could not be deleted." />
      );
    }
  };
  return (
    <Button variant="destructive" onClick={handleClick}>
      Delete
    </Button>
  );
};

export default DeleteButton;
