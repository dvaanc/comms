import React from 'react'

interface LoginTransparentButtonProps {
  text?: string,
  hyperlinked: string,
}
export default function LoginTransparentButton({ text, hyperlinked }: LoginTransparentButtonProps) {
  return (
    <button className="font-bold  ml-1">
      <span className="text-white">
        {text} 
      </span>
      <span className="text-blue-hyperlink-blue hover:underline">
        {hyperlinked}
      </span>
    </button>
  )
}
