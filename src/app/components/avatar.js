import Image from 'next/image'
export default function Avatar({ size, className }) {
  return <Image className={`rounded-full ${className}`} src='/images/avatar_128x128.jpg' width={size} height={size} alt="Qixiny's Avatar" />
}