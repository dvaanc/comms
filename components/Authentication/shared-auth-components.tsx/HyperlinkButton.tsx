import React from 'react'

interface HyperlinkButtonProps {
  text?: string,
  hyperlinked: string,
}
export default function HyperlinkButton({ text, hyperlinked }: HyperlinkButtonProps) {
  return (
    <button className="font-bold ml-1">
      <span className="text-white">
        {text} 
      </span>
      <a className="text-blue-hyperlink-blue hover:underline">
        {hyperlinked}
      </a>
    </button>
  )
}
