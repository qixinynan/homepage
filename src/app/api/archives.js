import reuqest, { del, get, post, put } from "@/app/common/request";

export async function getArchives() {
  const res = await get('/archives', {})
  const json = await res.json();
  return Response.json(json);
}

export async function deleteArchive(id) {
  const res = await del(`/archives/${id}`)
  return res;
}

export async function addArchive(name, desc) {
  const res = await post(`/archives/`, {}, {
    body: {
      "name": name,
      "description": desc
    }
  })
  return res;
}

export async function editArchive(id, name, desc) {
  const res = await put(`/archives/${id}`, {}, {
    body: {
      "name": name,
      "description": desc
    }
  })
  return res;
}