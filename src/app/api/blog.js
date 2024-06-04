import { del, get, post, put } from "@/app/common/request";

export async function getBlogs() {
  const res = await get('/blogs', {})
  return res
}

export async function getBlog(id) {
  const res = await get(`/blogs/${id}`, {})
  return res
}

export async function postBlog(title, content) {
  const res = await post(`/blogs`, {}, {
    body: {
      "title": title,
      "content": content
    }
  })
  return res;
}