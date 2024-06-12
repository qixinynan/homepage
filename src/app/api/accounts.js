import reuqest, { del, get, post, put } from "@/app/common/request";


export async function registerUser(username, password) {
  const res = await post(`/accounts/`, {
    body: {
      username,
      password,
    }
  })
  return res;
}

export async function getCurrentUser() {
  const res = get(`/accounts/me`);
  return res;
}
export async function tryGetCurrentUser() {
  const res = get(`/accounts/me`, { loginRedirect: false });
  return res;
}

export async function loginUser(username, password) {
  const res = await post(`/tokens`, {
    body: {
      username,
      password
    }
  })
  return res;
}