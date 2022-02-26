import React from 'react'
import type { NextPage } from 'next'
import RegisterForm from '../components/Authentication/RegisterForm'
import ParticleEffects from '../components/Authentication/shared-auth-components.tsx/ParticleEffects'
const Register: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <ParticleEffects />
      <RegisterForm />
    </div>
  )
}

export default Register;