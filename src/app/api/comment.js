import { del, get, post, put } from "@/app/common/request";

export async function getComments() {
  const res = await get('/comments', {})
  const json = await res.json();
  return Response.json(json);
}

export async function sendComment(username, content) {
  const res = await post(`/comments/`, {}, {
    body: {
      "username": username,
      "content": content
    }
  })
  return res;
}