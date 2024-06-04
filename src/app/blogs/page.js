import Card from "../components/common/card";
import { getBlogs } from "../api/blog";


export default async function Blog() {
  const blogs = (await getBlogs()).data;
  return <div className="mt-10">
    {blogs.map((blog, i) => (
      <a href={`/blogs/${blog.id}`}>
        <Card key={i} className="p-3 mt-3">
          <p className="font-bold text-lg">{blog.title}</p>
        </Card>
      </a>
    ))}
  </div>
}