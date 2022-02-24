import React from 'react'
interface LoginInputGroupProps {
  label: string
}
export default function LoginInputGroup({ label }:LoginInputGroupProps) {
  const capitalised = label.slice(0,1).toUpperCase() + label.slice(1, label.length);
  return (
    <div className="mb-3 w-full">
      <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="username">
        {capitalised}:
      </label>
      <input 
      className="
      min-w-full
      border-input-border
      rounded 
      py-3
      px-3
      text-gray-300
      leading-tight 
      outline-none                   
      focus:border-input-focus
      hover:border-black/30
      bg-input-bg
      transition border-color ease-in-out 0.2s
      " 
      id={label} 
      type="text" 
      placeholder={capitalised}
      />

    </div>
  )
}
