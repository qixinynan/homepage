
export default function Link({ children, className, href, onClick }) {
  return (<a onClick={onClick} className={`inline-block text-sm text-blue-500 cursor-pointer ${className}`} href={href}>{children}</a>)
}