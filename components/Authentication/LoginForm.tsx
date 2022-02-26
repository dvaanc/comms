import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LoginSubmitButton from './auth-components/SubmitButton'

interface LoginCredentialsProps {
  email: string,
  password: string,
}
export default function LoginForm() {
  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: ''} as LoginCredentialsProps)
  const handleInputChange = (e: { target: HTMLInputElement }): void => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <form className="fixed flex flex-col items-start sm:min-w-72 md:w-[456px] h-auto bg-blue-saturated-navy z-10 rounded-md p-5 animate-loadFormContainer">
      <div className="flex flex-col w-full h-24 pt-4">
        <h4 className="font-extrabold text-blue-light-blue text-3xl mb-1">Welcome back</h4>
        <p className="font-semibold text-white">We&apos;re so excited to see you again!</p>
      </div>
      <div className="flex flex-col items-start w-full mb-6">
        <div id="email" className="mb-3 w-full">
          <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input 
            className="form-input" 
            id="email"
            value={loginCredentials.email}
            type="text" 
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div id="password" className="mb-3 w-full">
          <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="password">Password:</label>
          <input 
            className="form-input" 
            id="password"
            value={loginCredentials.password}
            type="password" 
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
        <Link href="/login" passHref>
          <a className="font-semibold text-blue-hyperlink-blue hover:underline">Forgot your password?</a>
        </Link>
      </div>
      <div className="flex flex-col items-start w-full h-auto gap-2">
      <input
        type="submit"
        id="submit"
        className="block text-center w-full min-h-[46px] bg-blue-blue rounded font-semibold text-white hover:cursor-pointer"
        value="Login"
      />
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
