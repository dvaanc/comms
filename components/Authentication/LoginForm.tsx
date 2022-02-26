import Link from 'next/link'
import React from 'react'
import TextInput from './shared-auth-components.tsx/TextInput'
import LoginSubmitButton from './shared-auth-components.tsx/SubmitButton'
import HyperlinkButton from './shared-auth-components.tsx/HyperlinkButton'

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
        <h4 className="font-extrabold text-blue-light-blue text-3xl mb-1">Welcome back</h4>
        <p className="font-semibold text-white">We&apos;re so excited to see you again!</p>
      </div>
      <div className="flex flex-col items-start w-full mb-6">
        <TextInput label="username" />
        <TextInput label="password" />
        <HyperlinkButton hyperlinked="Forgot your password?"/>
      </div>
      <div className="flex flex-col items-start w-full h-auto gap-2">
        <LoginSubmitButton text="Login" />
        <div>
          <span className="text-white font-semibold">Need an </span>
          <Link href="/register" passHref>
            <a className="font-semibold text-blue-hyperlink-blue hover:underline">account?</a>
          </Link>
          
        </div>
      </div>
    </form>
  )
}
