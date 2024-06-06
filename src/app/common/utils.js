export function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  let diffDays;
  if (now.getMonth() == date.getMonth()) {
    diffDays = now.getDay() - date.getDay();
  }
  else {
    const diffTime = Math.abs(now - date);
    diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  if (diffDays === 0) {
    return `今天 ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  } else if (diffDays === 1) {
    return `昨天 ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  } else if (diffDays <= 7) {
    return `${(date.getMonth() + 1).toString().padStart(2, "0")
      }月${date.getDate().toString().padStart(2, "0")}日（${diffDays}天前 ）${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
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
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")
    }-${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
}