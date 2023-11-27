export default function TextCard({ children, className }) {
  return (
    <p className={`p-3 rounded-lg border text-gray-600 text-md ${className}`}>{children}</p>
  )
}