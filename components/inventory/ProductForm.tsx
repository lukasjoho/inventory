"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Product, ServerProduct } from "@/lib/types";
import { createProduct, getCategories, updateProduct } from "@/lib/db";
import { toast } from "react-hot-toast";
import ToastBody from "../ui/toastbody";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import DeleteButton from "./DeleteButton";
import CategoryOptions from "./CategoryOptions";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  description: z.string().min(2).max(1000).optional(),
  price: z.number().optional(),
  stock: z.number().optional(),
  visibility: z.boolean(),
  categoryId: z.string().optional(),
});

interface ProductFormProps {
  product?: ServerProduct;
  setOpen?: (arg: boolean) => void;
}
const ProductForm: FC<ProductFormProps> = ({ product, setOpen }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
        setCategories(categories);
        // Do something with the fetched data (e.g., set it to a state variable)
      } catch (error) {
        // Handle any errors that occurred during the data fetching process
      }
    };

    fetchCategories();
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { id, name, description, stock, price, visibility, category } =
    product ?? {};
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name || undefined,
      description: description || undefined,
      price: price || undefined,
      stock: stock || undefined,
      visibility: visibility || false,
      categoryId: category?.id || undefined,
    },
  });

  async function onSubmit(values: any) {
    setIsSubmitting(true);
    Object.keys(values).forEach((key) => {
      if (values[key] === undefined || values[key] === "") {
        values[key] = null;
      }
    });
    console.log(values);
    let res;
    if (product) {
      res = await updateProduct({ id: product.id, ...values });
    } else {
      res = await createProduct(values);
    }
    if (product) {
      if (res.ok) {
        toast.success(
          <ToastBody title="Success" message="Product updated successfully." />
        );
        setIsSubmitting(false);

        router.refresh();
        setOpen?.(false);
      } else {
        const errorResponse = await res.json();
        setIsSubmitting(false);

        toast.error(
          <ToastBody title="Failure" message={errorResponse.message} />
        );
      }
    } else {
      if (res.ok) {
        toast.success(
          <ToastBody title="Success" message="Product created successfully." />
        );
        setIsSubmitting(false);

        router.refresh();
        setOpen?.(false);
      } else {
        const errorResponse = await res.json();
        setIsSubmitting(false);

        toast.error(
          <ToastBody title="Failure" message={errorResponse.message} />
        );
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid gap-4 md:gap-8 grid-cols-2">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter price"
                    type="number"
                    min="0"
                    step="1"
                    {...form.register("price", {
                      setValueAs: (v) =>
                        v === "" ? undefined : parseInt(v, 10),
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stock</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter stock"
                    min="0"
                    step="1"
                    {...form.register("stock", {
                      setValueAs: (v) =>
                        v === "" ? undefined : parseInt(v, 10),
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="visibility"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Visibility</FormLabel>
                <FormControl>
                  <div>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <CategoryOptions options={categories} />
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-between">
          {product && <DeleteButton product={product} setOpen={setOpen} />}
          <Button
            type="submit"
            className={cn(!product && "w-full")}
            disabled={isSubmitting}
          >
            {product
              ? isSubmitting
                ? "Updating..."
                : "Update"
              : isSubmitting
              ? "Creating..."
              : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
