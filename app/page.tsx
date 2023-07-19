import InventoryHeader from "@/components/inventory/InventoryHeader";
import InventoryTable from "@/components/inventory/InventoryTable";
import ProductsFallback from "@/components/inventory/ProductsFallback";
import Container from "@/components/ui/container";
import { Suspense } from "react";

export const revalidate = 0;

export default function HomePage() {
  return (
    <Container>
      <InventoryHeader />
      <Suspense fallback={<ProductsFallback />}>
        <InventoryTable />
      </Suspense>
    </Container>
  );
}
