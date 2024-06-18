import ReactCookies from 'react-cookies'
import { cookies } from 'next/dist/client/components/headers';
import { getCurrentUser } from '../api/accounts';
export function formatDate(dateString) {
  const date = new Date(dateString);
  return getTimeString(date.valueOf())
}

/**
 * 
 * @param {number} timestamp 
 * @returns 
 */
export function getTimeString(timestamp) {
  const date = new Date(timestamp)
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")
    }-${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}


/**
 * @returns {boolean}
 */
export function isClient() {
  return typeof window != "undefined";
}

/**
 * @returns {boolean}
 */
export function isLogined() {
  if (!isClient()) {
    return cookies().get('token') ? true : false;
  }
  return ReactCookies.load('token') ? true : false;
}

export async function isAdmin() {
  const res = await getCurrentUser()
  if (res.code != 200) return false
  return res.data.role == "ADMIN"
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}