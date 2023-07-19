import InventoryHeader from "@/components/inventory/InventoryHeader";
import InventoryTable from "@/components/inventory/InventoryTable";
import Container from "@/components/ui/container";

export default function HomePage() {
  return (
    <Container>
      <InventoryHeader />
      <InventoryTable />
    </Container>
  );
}
