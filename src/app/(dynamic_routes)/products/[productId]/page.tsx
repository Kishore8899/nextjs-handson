export default function ProductDetail({ params }: { params: { productId: string } }) {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>This is the detail page for product ID: {params.productId}</p>
    </div>
  );
}