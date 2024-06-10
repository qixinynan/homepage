import Toastify from 'toastify-js'

/**
 * 
 * @param {string} msg 
 * @param {"normal"|"warning"|"danger"} type 
 */
export default function toast(msg, type = "normal") {
  switch (type) {
    case "normal":
      Toastify({
        text: msg,
        duration: 3000
      }).showToast();
      break;
    case "warning":
      Toastify({
        text: msg,
        style: {
          background: "orange",
        },
        duration: 3000
      }).showToast();
      break;
    case "danger":
      Toastify({
        text: msg,
        style: {
          background: "red",
        },
        duration: 3000
      }).showToast();
      break;
    default:
      Toastify({
        text: msg,
        duration: 3000
      }).showToast();
  }
}