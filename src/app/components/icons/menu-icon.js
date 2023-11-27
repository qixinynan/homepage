export default function MenuIcon({ className, fill }) {
  return (
    <svg className={className} fill={fill} viewBox="0 0 100 80" width="20" height="20">
      <rect width="80" height="14"></rect>
      <rect y="30" width="80" height="14"></rect>
      <rect y="60" width="80" height="14"></rect>
    </svg>
  )
}