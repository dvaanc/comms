import React from 'react'

interface ContentButtonProps {
  bgColour: string
}
export default function ContentButton() {
  return (
    <button
      type="button"
      className="px-8 py-3 text-black font-medium text-xs uppercase rounded hover:bg-white transition duration-150 ease-in-out">
      Open comms in your browser
  </button>
  )
}
