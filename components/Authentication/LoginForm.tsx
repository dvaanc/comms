import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { auth } from '../../backend/firebaseConfig'
import { login } from '../../backend/UserAuth'
import LoginSubmitButton from './auth-components/SubmitButton'

interface LoginCredentialsProps {
  email: string,
  password: string,
}
export default function LoginForm({ user, addUser }: any) {
  const router = useRouter()
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     // if(user) return router.push(`/channels/@me`)
  //     if(user) addUser(user.uid)
  //   })
  // }, [])
  // useEffect(() => {
  //   console.log(user)
  // }, [user])
  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: ''} as LoginCredentialsProps)


  const handleInputChange = (e: { target: HTMLInputElement }): void => {
    setLoginCredentials({ ...loginCredentials, [e.target.id]: e.target.value })
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const { email, password } = loginCredentials
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      router.push('/dashboard')
    } catch (err) {
      if(err instanceof Error) return console.log(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="fixed flex flex-col items-start sm:min-w-72 md:w-[456px] h-auto bg-blue-saturated-navy z-10 rounded-md p-5 animate-loadFormContainer">
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
