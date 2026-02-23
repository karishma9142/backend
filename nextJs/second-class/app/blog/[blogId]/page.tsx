import axios from 'axios'

interface BlogPageProps {
    params: Promise<{
      blogId: string;
    }>;
  }
  
  export default async function BlogPage({ params }: BlogPageProps) {
    const { blogId } = await params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${blogId}`);
    const data = response.data;
  
    return (
      <div>
        blog page 
        <br />
        <br />
        userId : {data.userId}
        <br />
        id : {data.id}
        <br />
        title : {data.title}
        <br />
        completed :  {data.completed ? "true" : "false"}
      </div>
    );
  }