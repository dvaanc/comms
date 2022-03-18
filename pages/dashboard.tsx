import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Dashboard from '../components/UserDashboard/Dashboard'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../backend/firebaseConfig'
import { useRouter } from 'next/router'
const UserDashboard: NextPage = ({ user, addUser }: any) => {
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) addUser(user.uid)
      if(!user) router.push('/login')
    })
  }, [])
  useEffect(() => {
    console.log(user)
  },[user])
  return (
    <div className="none:container h-screen w-screen flex flex-row bg-blue-dark-navy">
      <Dashboard user={user}/>
    </div>
  )
}

export default UserDashboard;
