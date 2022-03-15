import React from 'react'
import type { NextPage } from 'next'
import RegisterForm from '../components/Authentication/RegisterForm'
import ParticleEffects from '../components/Authentication/auth-components/ParticleEffects'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../backend/firebaseConfig'
import { useRouter } from 'next/router'
const Register: NextPage = () => {
  const router = useRouter()
  onAuthStateChanged(auth, (user) =>  {
    if(user) router.push('channels/@me')
  })
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <ParticleEffects />
      <RegisterForm />
    </div>
  )
}

export default Register;