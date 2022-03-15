import React, { FormEvent, useRef, useState } from 'react'
import Link from 'next/link'
import { createUserWithEmailAndPassword, onAuthStateChanged } from '@firebase/auth'
import { auth, db, storage } from '../../backend/firebaseConfig'
import { useRouter } from 'next/router'
import { doc, setDoc } from 'firebase/firestore'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { register } from '../../backend/UserAuth'
import upload from '../../assets/images/upload.svg'
import Image from 'next/image'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
interface RegisterCredentialsProps {
  email: string,
  username: string,
  password: string,
  profile: {
    name: string,
    src: any,
  }
}
type Inputs = {
  email: string,
  username: string,
  password: string,
}
export default function RegisterForm() {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
  
  // });
  const fileInput = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const [registerCredentials, setRegisterCredentials] = useState({ email: '', username: '', password: '', profile: { name: '', src: '' } } as RegisterCredentialsProps)
  // const handleRegistration = handleSubmit((data) => { 
  //   console.log(data) 
  // })

  onAuthStateChanged(auth, (user) =>  {
    if(user) router.push('channels/@me')
  })
  const handleInputChange = (e: { target: HTMLInputElement }): void => {
    setRegisterCredentials({ ...registerCredentials, [e.target.id]: e.target.value })
  }

  const handleFileChange = (e: { target: HTMLInputElement }): void => {
    if(e.target.files && e.target.files[0]) {
      setRegisterCredentials({ 
        ...registerCredentials, 
        profile: { name: e.target.files[0].name, src: e.target.files[0] } 
      }) 
    }
  }
  
  const handleSubmit = async(e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const { email, password, username, profile } = registerCredentials
    try {
      const userRef = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, `user-assets/${userRef.user.uid}/userProfile.png`)
      await uploadBytes(storageRef, profile.src)
      await setDoc(doc(db, "user-collection", `${userRef.user.uid}`), { email, username})
      router.push('/channels/@me')

    } catch (error) {
      if(error instanceof Error) return console.log(error.message)
      
    }
  }
  return (
    <form onSubmit={handleSubmit} className="fixed flex flex-col items-start sm:min-w-72 md:w-[456px] min-h-[496px] bg-blue-saturated-navy z-10 rounded-md p-5 animate-loadFormContainer" >
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
            // defaultValue=""
            // {...register("email"), { required: true, }}
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
            // defaultValue=""
            // {...register("username"), { required: true, }}
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
            // defaultValue=""
            // {...register("password"), { required: true, }}
            onChange={handleInputChange}
          />
        </div>
        <div id="profilePicture" className="mb-3 w-full">
          <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="profilePicture">Profile picture:</label>
            <button
              className="form-input flex justify-start items-center gap-4 text-1xl" 
              id="profilePicture"
              value="+"
              type="button"
              placeholder="Password"
              onClick={ () => fileInput.current?.click() }
              // {...register("password"), { required: true, }}
            >
              <Image src={upload} width="48" height="48" alt="upload image"/>
              <p className="text-gray-300">{ registerCredentials.profile.name }</p>
            </button>
            <input ref={fileInput} accept="image/*" type="file" className="hidden" onChange={handleFileChange} />
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
