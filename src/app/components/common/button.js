'use client';
export default function Button({ children, className, onClick, color }) {
  let colorStyle = ""
  switch (color) {
    case 'red':
      colorStyle = "bg-red-700"
      break;
    case 'pink':
      colorStyle = "bg-red-400"
      break
    default:
      colorStyle = "bg-neutral-700";
  }
  return <button onClick={onClick} className={`rounded-md
                  px-3 py-1.5 text-sm
                  font-semibold leading-6 text-white shadow-sm
                  hover:opacity-80 active:opacity-90 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2  ${colorStyle} ${className}`}>{children}</button>
}