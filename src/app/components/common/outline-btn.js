export default function OutlineButton({ children, className, onClick }) {
  return <button onClick={onClick} className={`rounded-lg border-blue-400 text-blue-400 border p-1 ${className}`}>{children}</button>
}