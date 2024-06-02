import { del, get, post, put } from "@/app/common/request";

export async function getComments() {
  const res = await get('/comments', {})
  return res
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

export async function deleteComment(id) {
  const res = await del(`/comments/${id}`)
  return res;
}