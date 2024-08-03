import reuqest, { del, get, post, put } from "@/app/common/request";
import moment from "moment";


export async function getDaily(date) {
  const dateString = moment(date).format("YYYYMMDD")
  const res = await get(`/dailies/${dateString}`)
  return res;
}

export async function getAllDaily() {
  const res = await get(`/dailies/all`)
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

export async function getDailyItems(date) {
  const dateString = moment(date).format("YYYYMMDD")
  const res = await get(`/dailies/items/${dateString}`)
  return res;
}


export async function getAllDailyItems() {
  const res = await get(`/dailies/items/all`);
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