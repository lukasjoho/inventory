"use client";
import React from "react";
import { Button } from "../ui/button";
import { createManyCategories, createManyProducts } from "@/lib/db";
import { seedCategories, seedProducts } from "@/lib/data/seedProducts";
import { toast } from "react-hot-toast";
import ToastBody from "../ui/toastbody";
import { useRouter } from "next/navigation";

const SeedButton = () => {
  const router = useRouter();
  const handleClick = async () => {
    const resProducts = await createManyProducts(seedProducts);
    const resCategories = await createManyCategories(seedCategories);
    if (resProducts.ok || resCategories.ok) {
      toast.success(
        <ToastBody
          title="Success"
          message="Database seeded with products and categories successfully."
        />
      );
      router.refresh();
    } else {
      toast.error(
        <ToastBody title="Failure" message="Database seed failed." />
      );
    }
  };
  return (
    <Button variant="outline" onClick={handleClick}>
      Seed Database
    </Button>
  );
};

export default SeedButton;
