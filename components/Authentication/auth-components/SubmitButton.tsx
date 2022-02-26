import React from 'react'
interface SubmitButtonProps {
  text: string,
}
export default function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button
    className="
      block
      text-center
      w-full
      min-h-[46px]
      bg-blue-blue
      rounded
      font-semibold
      text-white
      "
    >
      { text }
    </button>
  )
}
