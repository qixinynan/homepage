import Card from "../components/common/card";
import { getBlogs } from "../api/blog";
import Button from "../components/common/button";


export default async function Blog() {
  const blogs = (await getBlogs()).data;
  console.log("Fetch blog:", blogs)
  return <div className="root mt-10">
    {/* <p className="text-xs">博客数量: {blogs.length}</p> */}
    <div className="flex justify-end">
      <a className="bg-blue-500 p-2 rounded text-white text-sm" href="/blogs/post">发布</a>
    </div>
    {blogs.map((blog, i) => (
      <a href={`/blogs/${blog.id}`}>
        <Card key={i} className="p-3 mt-3">
          <p className="font-bold text-lg">{blog.title}</p>
        </Card>
      </a>
    ))}
  </div>
}

export const metadata = {
  title: "博客 - 七夕泥の网站",
};
