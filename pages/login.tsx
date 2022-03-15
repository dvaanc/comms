import React from 'react'
import type { NextPage } from 'next'
import ParticleEffects from '../components/Authentication/auth-components/ParticleEffects';
import LoginForm from '../components/Authentication/LoginForm';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../backend/firebaseConfig';
import { useRouter } from 'next/router';


const Login: NextPage = () => {
  const router = useRouter()
  onAuthStateChanged(auth, (user) =>  {
    if(user) router.push('channels/@me')
  })
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <ParticleEffects />
      <LoginForm />
    </div>
  )
}

export default Login;
