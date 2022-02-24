import React from 'react'
import Link from 'next/link';
interface LoginButtonProps {
  isLoading: boolean,
}
export default function LoginButton({ }) {
  return (
    <Link href="/login">
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
          hover:scale-110
          select-none
          "
      >

        login
      </button>
    </Link>
  )
}
