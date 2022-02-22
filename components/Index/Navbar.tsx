import React from 'react'
import LoginButton from './nav-components/LoginButton'
import Logo from './nav-components/Logo'
export default function Navbar() {


  return (
    <div 
    className="
    none:container 
    h-20
    px-6 
    flex 
    items-center 
    justify-between 
    bg-blue-dark-navy 
    border-b 
    border-zink-200/50
    "
    >
      <Logo />
      <LoginButton  />
    </div>
  )
}
