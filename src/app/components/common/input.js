import { useState } from "react"

export default function Input({ className, placeHolder, value, onChange, type = "text", readOnly = false }) {
  return <input value={value} readOnly={readOnly} onChange={onChange} type={type} className={`border rounded bg-slate-50 p-1 ${className}`} placeholder={placeHolder}></input>

}