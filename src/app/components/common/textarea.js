export default function TextArea({ className, value, onChange, placeHolder, required = false }) {
  return <textarea value={value} placeholder={placeHolder} onChange={onChange} required={required} className={`w-full border rounded resize-none bg-slate-50 p-1 ${className}`}></textarea>
}