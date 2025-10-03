//example for Catch all Routes
 export default async function Docs({ params }: { params: { slug: string[] } }) {
      // ✅ Await params before using
  const { slug } = await params;
    if(slug?.length === 1 && slug?.includes("content")){
        return (
            <div>
                <h1>Getting Content</h1>
                <p>This is the getting content: {slug[0]}</p>
            </div>
        );
    }
    if(slug?.includes("api")){
        return (
            <div>
                <h1>API Reference</h1>
                <p>This is the API reference for {slug[0]}: {slug[1]}</p>
            </div>
        );
    }
    if(slug?.length === 2 && slug[1] === "api"){
        return (
            <div>
                <h1>API Reference</h1>
                <p>This is the API reference for {slug[0]}: {slug[1]}</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Documentation - {slug?.join('/')}</h1>
            <p>This is the documentation page for {slug?.join('/')}</p>
        </div>
    );
 }