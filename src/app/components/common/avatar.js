
export default function Avatar({ size, className, src = '/images/avatar_128x128.jpg' }) {
  return <img className={`rounded-full ${className}`} src={src} width={size} height={size} />
}