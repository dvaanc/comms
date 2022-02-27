import React, { FormEvent, useState } from 'react'
import Link from 'next/link'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../backend/firebaseConfig'
import { register } from '../../backend/UserAuth'
import { useRouter } from 'next/router'
interface RegisterCredentialsProps {
  email: string,
  username: string,
  password: string,
}
export default function RegisterForm() {
  const router = useRouter()
  const [registerCredentials, setRegisterCredentials] = useState(
    { 
      email: '', 
      username: '', 
      password: '' 
    } as RegisterCredentialsProps)

  const handleInputChange = (e: { target: HTMLInputElement }): void => {
    setRegisterCredentials({
      ...registerCredentials,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async(e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const { email, password } = registerCredentials
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      // await setDoc(doc(db, "user-collection", user.uid), {
  
      // })
      router.push('/channels/@me')

    } catch (error) {
      if(error instanceof Error) return console.log(error.message)
      
    }
  }

  return (
    <form onSubmit={handleSubmit} className="fixed flex flex-col items-start sm:min-w-72 md:w-[456px] min-h-[496px] bg-blue-saturated-navy z-10 rounded-md p-5 animate-loadFormContainer">
      <div className="flex flex-col w-full h-24 pt-4">
        <h4 className="font-extrabold text-blue-light-blue text-3xl mb-1 text-center">Create an account</h4>
      </div>
      <div className="flex flex-col items-start w-full mb-6">
      <div id="email" className="mb-3 w-full">
          <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input 
            className="form-input" 
            id="email"
            value={registerCredentials.email}
            type="email" 
            placeholder="Email"
            onChange={handleInputChange}
          />
        </div>
        <div id="username" className="mb-3 w-full">
          <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="password">Username:</label>
          <input 
            className="form-input" 
            type="text"
            id="username"
            value={registerCredentials.username}
            placeholder="Username"
            onChange={handleInputChange}
          />
        </div>
        <div id="password" className="mb-3 w-full">
          <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="password">Password:</label>
          <input 
            className="form-input" 
            id="password"
            value={registerCredentials.password}
            type="password" 
            placeholder="Password"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-col items-start w-full h-auto gap-2">
      <input
        type="submit"
        id="submit"
        className="block text-center w-full min-h-[46px] bg-blue-blue rounded font-semibold text-white hover:cursor-pointer"
        value="Register"
      />
        <Link href="/login" passHref>
          <a className="font-semibold text-blue-hyperlink-blue hover:underline">Already have an account?</a>
        </Link>
        
      </div>

  </form>
  )
}
