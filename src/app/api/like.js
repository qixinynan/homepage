import { del, get, post, put } from "@/app/common/request";

export async function getLike() {
  const res = await get('/like', {})
  return res;
}

export async function like() {
  const res = await put('/like', {})
  return res;
}