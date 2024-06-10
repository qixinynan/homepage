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
    return false;
  }
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
}