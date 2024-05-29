import config from "./config"

const BASEURL = config.baseUrl;
/**
 * 
 * @param {{url: string, method: string, headers: Object, params: Object, body: Object}} param0
 */
export default async function reuqest({ url, method = 'GET', headers = {}, params = {}, body }) {
  // Parmas
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

  console.log(body);
  return await fetch(BASEURL + url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body)
  })
}

export async function get(url, params = {}, { headers = {} } = {}) {
  console.log('headers', headers)
  return reuqest({
    url: url,
    method: 'GET',
    params: params,
    headers: headers,
  })
}

export async function del(url, params = {}, { headers = {} } = {}) {
  console.log('headers', headers)
  return reuqest({
    url: url,
    method: 'DELETE',
    params: params,
    headers: headers,
  })
}

export async function put(url, params = {}, { headers = {}, body = {} } = {}) {
  console.log('headers', headers)
  return reuqest({
    url: url,
    method: 'PUT',
    params: params,
    headers: headers,
    body: body
  })
}
export async function post(url, params = {}, { headers = {}, body = {} } = {}) {
  console.log('body', body)
  return reuqest({
    url: url,
    method: 'POST',
    params: params,
    headers: headers,
    body: body
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