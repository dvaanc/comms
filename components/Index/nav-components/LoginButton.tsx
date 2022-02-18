import React from 'react'
import 'tw-elements'
interface LoginButtonProps {
  isLoading: boolean,
}
export default function LoginButton({ isLoading }: LoginButtonProps) {
  return (
    <button 
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="
    px-6 
    py-2.5 
    flex
    bg-blue-600
    items-center
    justify-center
    text-white
    font-medium 
    text-xs
    leading-light
    uppercase
    rounded-full
    transition duration-150 ease-in-out
    hover:bg-blue-700
    "

    >
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    </button>
  )
}
