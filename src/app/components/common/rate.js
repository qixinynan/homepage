'use client'

import { useState } from "react"

function RateItem({ active = true, onClick, size }) {
  return <svg onClick={onClick} className={`${active ? 'text-orange-400' : 'text-slate-300'} w-${size} h-${size} fill-current transition-all hover:stroke-current`} focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
}

export default function Rate({ score = 5, setScore = () => { }, size = 8, className = "" }) {
  return <div className={`flex justify-center items-center h-12 ${className}`}>
    <RateItem size={size} active={score > 0} onClick={() => setScore(1)}></RateItem>
    <RateItem size={size} active={score > 1} onClick={() => setScore(2)}></RateItem>
    <RateItem size={size} active={score > 2} onClick={() => setScore(3)}></RateItem>
    <RateItem size={size} active={score > 3} onClick={() => setScore(4)}></RateItem>
    <RateItem size={size} active={score > 4} onClick={() => setScore(5)}></RateItem>
  </div>
}