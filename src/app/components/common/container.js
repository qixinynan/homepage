export default function Container({ children, classname = "" }) {
  return <div className={`max-w-xl m-3 p-3 mx-auto ${classname}`}>{children}</div>
}