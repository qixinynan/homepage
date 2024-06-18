export default function UnderlineInput({ className, placeHolder = "", value, onChange, type = "text", readOnly = false, required = false, ...props }) {
  return <input value={value} readOnly={readOnly} required={required} onChange={onChange} type={type}
    className={`focus:outline-none focus:border-b-slate-700 w-full transition-colors border-b p-1 ${className}`} placeholder={placeHolder} {...props}></input>
}