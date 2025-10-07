import { getProducts } from "@/prisma-db";
import { ProductDetail } from "./product-detail";
import Search from "@/components/search";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsPrismaDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);
  return (
    <div className={"display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;background-color:#1a202c;padding:2rem;"}>
      <Search />
      <ProductDetail products={products} />
    </div>
  );
}
