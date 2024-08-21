import { getBlogs } from "../api/blog";
import Card from "../components/common/card";
import H2 from "../components/common/h2";
export default async function BlogList({}) {
  const blogs = (await getBlogs()).data;
  return <div className="my-5 mb-10 ">
    <H2 className="ml-2">博客们：</H2>
    {blogs.map((blog, i) => (
      <a href={`/blogs/${blog.id}`}>
        <Card key={i} className="p-3 mt-3">
          <p className="font-bold text-sm text-blue-500">{blog.title}</p>
        </Card>
      </a>
    ))}
  </div>

} 