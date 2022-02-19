import React from 'react'
interface LoginButtonProps {
  isLoading: boolean,
}
export default function LoginButton({ }) {
  return (
    <button 
      type="button"
      className="
        px-6 
        py-2.5 
        flex
        bg-white
        items-center
        justify-center
        text-black
        font-medium 
        text-xs
        leading-light
        uppercase
        rounded-full
        transition duration-150 ease-in-out
        hover:shadow-inner
        "
    >

      login
    </button>
  )
}
