import React from 'react'
interface TextInputpProps {
  label: string,
  id: string,
  value: string,
}
export default function TextInput({ label, id, value }: TextInputpProps) {
  const capitalised = label.slice(0,1).toUpperCase() + label.slice(1, label.length);
  return (
    <div id={id} className="mb-3 w-full">
      <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="username">
        {capitalised}:
      </label>
      <input 
      className="
      min-w-full
      border
      border-black/30
      rounded 
      py-3
      px-3
      text-gray-300
      leading-tight 
      outline-none                   
      focus:border-input-focus
      hover:border-input-hover
      bg-input-bg
      transition border-color ease-in-out 0.2s
      " 
      id={label}
      value={value}
      type="text" 
      placeholder={capitalised}
      />

    </div>
  )
}
