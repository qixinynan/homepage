export function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return `今天 ${date.getHours()}:${date.getMinutes()}`;
  } else if (diffDays === 1) {
    return `昨天 ${date.getHours()}:${date.getMinutes()}`;
  } else if (diffDays <= 7) {
    return `${diffDays}天前 ${date.getHours()}:${date.getMinutes()}`;
  } else {
    return getTimeString(date.valueOf())
  }
}

/**
 * 
 * @param {number} timestamp 
 * @returns 
 */
export function getTimeString(timestamp) {
  const date = new Date(timestamp)
  return `${date.getFullYear()}-${date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}