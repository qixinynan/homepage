import config from "./config"
import toast from "./toast";
import { isClient } from "./utils";

const defaultOpt = { params: {}, headers: {}, body: {}, loginRedirect: true }

const BASEURL = config.baseUrl;


export default async function reuqest({ url, method = 'GET', opt = defaultOpt }) {
  const { headers = {}, params = {}, body = {}, loginRedirect = {} } = opt;

  let dataStr = ''; //数据拼接字符串
  Object.keys(params).forEach(key => {
    dataStr += key + '=' + data[key] + '&';
  })
  if (dataStr !== '') {
    dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
    url = url + '?' + dataStr;
  }

  // Header
  headers['Accept'] = 'application/json'
  headers['Content-Type'] = 'application/json'

  if (isClient()) {
    const token = localStorage.getItem("token")
    headers['Authorization'] = `Bearer ${token}`
  }

  let bodyStr = JSON.stringify(body)
  if (method == 'GET' || method == 'DELETE') {
    bodyStr = null;
  }

  return new Promise((resolve, reject) => {
    fetch(BASEURL + url, {
      method: method,
      credentials: 'include',
      mode: 'cors',
      headers: headers,
      body: bodyStr
    }).then(async (res) => {
      const data = await res.json();
      if (data.code == 200) {
        resolve(data);
      }
      else if (data.code == 401) {
        if (loginRedirect) {
          localStorage.removeItem("token");
          location.href = "/account/login"
        }
      }
      else {
        toast(data.msg, "danger");
        resolve(data)
      }
    }).catch(res => {
      reject(res);
    })
  })
}


export async function get(url, opt = defaultOpt) {
  return reuqest({
    url: url,
    method: 'GET',
    opt
  })
}

export async function del(url, opt = defaultOpt) {
  return reuqest({
    url: url,
    method: 'DELETE',
    opt
  })
}

export async function put(url, opt = defaultOpt) {
  return reuqest({
    url: url,
    method: 'PUT',
    opt
  })
}
export async function post(url, opt = defaultOpt) {
  return reuqest({
    url: url,
    method: 'POST',
    opt
  })
}

// export function del(url, params = {}, { headers = {} }) {
//   reuqest({
//     url: url,
//     method: 'DELETE',
//     params: params,
//     headers: headers,
//   })
// }