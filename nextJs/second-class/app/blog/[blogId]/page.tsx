interface BlogPageProps {
    params: Promise<{
      blogId: string;
    }>;
  }
  
  export default async function BlogPage({ params }: BlogPageProps) {
    const { blogId } = await params;
  
    return (
      <div>
        blog page {blogId}
      </div>
    );
  }