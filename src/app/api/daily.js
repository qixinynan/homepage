import reuqest, { del, get, post, put } from "@/app/common/request";
export async function getTodayDaily() {
  const res = await get('/dailies/today')
  return res;
}

export async function postDaily(title, description, score) {
  const res = await post(`/dailies/`, {
    body: {
      title,
      description,
      score
    }
  })
  return res;
}

export async function getTodayDailyItems() {
  const res = await get('/dailies/items')
  return res;
}

export async function postDailyItem(content, description = null) {
  const res = await post(`/dailies/items`, {
    body: {
      content,
      description
    }
  })
  return res;
}

export async function deleteDailyItem(id) {
  return await del(`/dailies/items/${id}`)
}