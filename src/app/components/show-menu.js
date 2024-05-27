'use client'

export default function ShowMenu({ children }) {
  return <div onClick={() => { location.hash = "#menu" }}>
    {children}
  </div>
}