import React from 'react'
import LoginInputGroup from './login-components/LoginInputGroup'
import LoginSubmitButton from './login-components/LoginSubmitButton'
import LoginTransparentButton from './login-components/LoginTransparentButton'

export default function LoginForm() {
  return (
    <form className="
      fixed 
      flex 
      flex-col 
      items-start 
      min-w-[456px] 
      h-auto 
      bg-blue-saturated-navy 
      z-10 
      rounded-md 
      p-5
      animate-loadFormContainer
    "
    >
      <div className="flex flex-col w-full h-24 pt-4">
        <h4 className="font-extrabold text-custom-heading text-3xl mb-1">Welcome back</h4>
        <p className="font-semibold text-white">We&apos;re so excited to see you again!</p>
      </div>
      <div className="flex flex-col items-start w-full mb-6">
        <LoginInputGroup label="username" />
        <LoginInputGroup label="password" />
        <LoginTransparentButton hyperlinked="Forgot your password?"/>
      </div>
      <div className="flex flex-col items-start w-full h-auto gap-2">
        <LoginSubmitButton />
        <LoginTransparentButton text="Need an account? " hyperlinked="Register"/>
      </div>
    </form>
  )
}
