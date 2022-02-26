import React from 'react'
import LoginSubmitButton from './shared-auth-components.tsx/SubmitButton'
import HyperlinkButton from './shared-auth-components.tsx/HyperlinkButton'
import TextInput from './shared-auth-components.tsx/TextInput'
import Link from 'next/link'
export default function RegisterForm() {
  return (
    <form className="
      fixed 
      flex 
      flex-col 
      items-start 
      min-w-[456px] 
      min-h-[496px] 
      bg-blue-saturated-navy 
      z-10 
      rounded-md 
      p-5
      animate-loadFormContainer
    "
    >
      <div className="flex flex-col w-full h-24 pt-4">
        <h4 className="font-extrabold text-blue-light-blue text-3xl mb-1 text-center">Create an account</h4>
      </div>
      <div className="flex flex-col items-start w-full mb-6">
        <TextInput label="Email" />
        <TextInput label="Username" />
        <TextInput label="Password" />
      </div>
      <div className="flex flex-col items-start w-full h-auto gap-2">
        <LoginSubmitButton text="Register"/>
        <Link href="/login" passHref>
          <a className="font-semibold text-blue-hyperlink-blue hover:underline">Already have an account?</a>
        </Link>
        
      </div>

  </form>
  )
}
