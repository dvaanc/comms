import React from 'react'
import LoginInputGroup from './LoginInputGroup'

export default function LoginForm() {
  return (
    <form className="fixed flex flex-col w-1/3 h-2/4 bg-blue-saturated-navy z-10 rounded-md p-5">
      <div className="flex flex-col w-100 h-24 pt-4">
        <h4 className="font-extrabold text-custom-heading text-3xl mb-1">Welcome Back</h4>
        <p className="font-semibold text-white">We're so excited to see you again!</p>
      </div>
      <LoginInputGroup label="username" />
      <LoginInputGroup label="password" />
  </form>
  )
}
