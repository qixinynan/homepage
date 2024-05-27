export default function SpanCard({ children, className }) {
  return (
    <span className={`p-1 rounded-lg border text-gray-400 text-xs truncate ${className}`}>{children}</span>
  )
}