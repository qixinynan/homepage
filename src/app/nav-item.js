export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      <a className="hover:underline underline-offset-4" href={href}>{children}</a>
    </li>
  )
}