import React from 'react'
import type { NextPage } from 'next'
import ParticleEffects from '../components/Authentication/shared-auth-components.tsx/ParticleEffects';
import LoginForm from '../components/Authentication/LoginForm';

const Login: NextPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <ParticleEffects />
      <LoginForm />
    </div>
  )
}

export default Login;
