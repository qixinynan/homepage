'use client'
export default function DateInput({ defaultValue }) {
  return (
    <form method="GET" action="/daily">
      <input name="date" defaultValue={defaultValue} className="appearance-none bg-white rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none sm:w-full md:w-64"
        type="date"
        onChange={(e) => e.target.form.submit()}
      />
    </form>
  )
}