type ProductPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

export default async function ProductDetail({ params }: ProductPageProps) {
   const { productId } = await params;
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>This is the detail page for product ID: {productId}</p>
    </div>
  );
}