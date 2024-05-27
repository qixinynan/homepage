export default function TextMd({ className, children, color = "text-gray-800" }) {
  return <p className={`${className} ${color} text-sm`}>{children}</p>
}