import Image from 'next/image'
export default function Avatar({ size, className, src = '/images/avatar_128x128.jpg' }) {
  return <Image className={`rounded-full ${className}`} src={src} width={size} height={size} alt="Qixiny's Avatar" />
}