import React from 'react'
import Link from 'next/link';
interface ContentButtonProps {
  bgColor: string,
  textColor?: string,
  textContent: string,
}
export default function ContentButton({ bgColor, textColor, textContent }: ContentButtonProps) {
  const styles = `
    px-8 
    py-3 
    bg-${bgColor}
    text-${textColor}
    font-medium 
    text-xs 
    uppercase 
    rounded 
    hover:scale-110
    transition duration-150 ease-in-out
  `
  return (
    <Link href="/login">
      <button type="button" className={styles}>
        {textContent}
      </button>
    </Link>
  )
}
