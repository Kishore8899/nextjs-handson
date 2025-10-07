type ReviewPageProps = {
  params: Promise<{
    productId: string;
    reviewid: string;
  }>;
};

export default async function ReviewDetail({ params }: ReviewPageProps) {
     const { productId, reviewid } = await params;
    return (
        <div>
            <h1>Review Detail Page</h1>
            <p>This is the detail page for review ID: {reviewid} of product ID: {productId}</p>
        </div>
    );
}