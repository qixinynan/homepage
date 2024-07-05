import { getBlog } from "@/app/api/blog";
import H2 from "@/app/components/common/h2";
import Markdown from "@/app/components/common/markdown";

export default async function BlogView({ params }) {
  const id = params.id;
  const blog = (await getBlog(id)).data
  console.log(blog)
  return <div className="root mx-5 mt-5">
    <h1 className="border-b" style={{ fontSize: 1.8 + 'em' }}>{blog.title}</h1>
    <p className="text-sm text-slate-500 mb-2">阅读量：{blog.views}</p>
    <Markdown content={blog.content}></Markdown>
  </div>
}

export async function generateMetadata({ params }) {
  const id = params.id;
  const blog = (await getBlog(id)).data;

  return {
    title: `${blog.title} - 七夕泥の网站`,
  };
}
