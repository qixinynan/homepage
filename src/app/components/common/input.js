import { useState } from "react"

export default function Input({ className, placeHolder, value, onChange, type = "text", readOnly = false, required = false, ...props }) {
  return <input value={value} readOnly={readOnly} required={required} onChange={onChange} type={type} className={`border rounded bg-slate-50 p-1 ${className}`} placeholder={placeHolder} {...props}></input>

}