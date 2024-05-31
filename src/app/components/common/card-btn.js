import Card from "./card"
export default function CardButton({ onClick, children, className }) {
  return (<Card className={`mb-4 bg-blue-50 text-xs text-blue-500 text-center cursor-pointer ${className}`} onClick={onClick}>{children}</Card>)
}