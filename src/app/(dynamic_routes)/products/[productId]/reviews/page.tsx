// src/app/products/[productId]/reviews/page.tsx
export default async function Reviews({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // ✅ Await params before using
  const { productId } = await params;

  return (
    <div>
      <h1>Reviews</h1>
      <ol>
        <li>Review 1 for product {productId}</li>
        <li>Review 2 for product {productId}</li>
        <li>Review 3 for product {productId}</li>
      </ol>
    </div>
  );
}
