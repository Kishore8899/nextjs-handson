export default function ReviewDetail({ params }: { params: { productId: string; reviewid: string } }) { 
    return (
        <div>
            <h1>Review Detail Page</h1>
            <p>This is the detail page for review ID: {params.reviewid} of product ID: {params.productId}</p>
        </div>
    );
}