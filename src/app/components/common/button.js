'use client';
export default function Button({ children, className, onClick }) {
  return <button onClick={onClick} className={`mt-5 rounded-md
                  bg-neutral-700 px-3 py-1.5 text-sm
                  font-semibold leading-6 text-white shadow-sm
                  hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-neutral-600 ${className}`}>{children}</button>
}