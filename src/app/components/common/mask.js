export default function Mask({ onClick, className }) {
  return <div onClick={onClick} className={`fixed w-screen h-screen top-0 left-0 bg-black opacity-70 z-30 ${className}`}></div>
}