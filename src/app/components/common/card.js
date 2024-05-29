export default function Card({ children, className, onClick }) {
  return (<div onClick={onClick} className={`border rounded-md p-2 ${className}`}>{children}</div>)
}