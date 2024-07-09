import reuqest, { del, get, post, put } from "@/app/common/request";

export async function getActivities() {
  const res = await get('/activities')
  return res;
}


export async function nowActivities() {
  const res = await get('/activities/now')
  return res;
}

export async function postActivities(content, desc) {
  const res = await post(`/activities/`, {
    body: {
      "content": content,
      "description": desc
    }
  })
  return res;
}