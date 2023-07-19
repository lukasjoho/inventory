"use client";
import React from "react";
import { Button } from "../ui/button";
import { createManyProducts } from "@/lib/db";
import { seedProducts } from "@/lib/data/seedProducts";
import { toast } from "react-hot-toast";
import ToastBody from "../ui/toastbody";

const SeedButton = () => {
  const handleClick = async () => {
    const res = await createManyProducts(seedProducts);
    if (res.ok) {
      toast.success(
        <ToastBody
          title="Success"
          message="Databased seeded with products successfully."
        />
      );
    } else {
      toast.error(
        <ToastBody title="Failure" message="Databased seed failed." />
      );
    }
  };
  return (
    <Button variant="outline" onClick={handleClick}>
      Seed Products
    </Button>
  );
};

export default SeedButton;
