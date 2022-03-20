import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import ParticleEffects from '../components/Authentication/auth-components/ParticleEffects';
import LoginForm from '../components/Authentication/LoginForm';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../backend/firebaseConfig';
import { useRouter } from 'next/router';
import { Props } from './_app';

const Login: NextPage = ({ user, addUser }: any) => {
  // const router = useRouter()
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if(user) addUser(user.uid) ; router.push(`/dashboard`)
  //   })
  // }, [])
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <ParticleEffects />
      <LoginForm />
    </div>
  )
}

export default Login;
