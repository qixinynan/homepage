import { getBlog } from "@/app/api/blog";
import config from "@/app/common/config";
import H2 from "@/app/components/common/h2";

export default async function BlogView({ params }) {
  const id = params.id;
  const blog = (await getBlog(id)).data
  console.log(blog)
  return <div className="mx-5 mt-5">
    <H2 className="text-3xl">{blog.title}</H2>
    <p>{blog.content}</p>
  </div>
}