import React from 'react'
interface FormProps {
  height: string,
  width: string,
}
export default function Form({ height, width }: FormProps) {
  const styles = `
  fixed 
  flex 
  flex-col 
  items-start 
  min-w-[${height}px] 
  min-h-[${width}px] 
  bg-blue-saturated-navy 
  z-10 
  rounded-md 
  p-5
  `
  return (
    <form className={styles}>

    </form>
  )
}
