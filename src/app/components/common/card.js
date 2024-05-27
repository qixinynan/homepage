export default function Card({ children, className }) {
  return (<div className={`border rounded-md p-2 ${className}`}>{children}</div>)
}