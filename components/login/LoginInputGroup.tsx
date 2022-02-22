import React from 'react'
interface LoginInputGroupProps {
  label: string
}
export default function LoginInputGroup({ label }:LoginInputGroupProps) {
  const capitalised = label.slice(0,1).toUpperCase() + label.slice(1, label.length);
  return (
    <div className="mb-3">
      <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
        {capitalised}:
      </label>
      <input 
      className="
      shadow 
      appearance-none 
      border-input-border
      rounded 
      w-full
      py-3
      px-3
      text-gray-700 
      leading-tight 
      focus:outline-none 
      focus:shadow-outline
      focus:border-input-focus
      hover:border-input-hover
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
