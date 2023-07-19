"use client";
import React, { FC, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { ServerProduct } from "@/lib/types";
import { deleteProduct } from "@/lib/db";
import { toast } from "react-hot-toast";
import ToastBody from "../ui/toastbody";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface DeleteButtonProps {
  product?: ServerProduct;
  setOpen?: (arg: boolean) => void;
}

const DeleteButton: FC<DeleteButtonProps> = ({
  product,
  setOpen: setParentOpen,
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClick = async (e: any) => {
    e.preventDefault();

    const res = await deleteProduct(product?.id);
    if (res.ok) {
      toast.success(
        <ToastBody title="Success" message="Product successfully deleted." />
      );
      setOpen(false);
      setParentOpen?.(false);

      router.refresh();
    } else {
      toast.error(
        <ToastBody title="Failure" message="Product could not be deleted." />
      );
    }
  };
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger>
          <div className={buttonVariants({ variant: "secondary" })}>Delete</div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. It will permanently delete this
              product from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleClick}>
              <Button variant="destructive">Delete</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteButton;
