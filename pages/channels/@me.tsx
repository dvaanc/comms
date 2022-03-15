import React from 'react'
import type { NextPage } from 'next'
import Dashboard from '../../components/UserDashboard/Dashboard'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../backend/firebaseConfig'
import { useRouter } from 'next/router'
const UserDashboard: NextPage = () => {
  const router = useRouter()
  onAuthStateChanged(auth, (user) => {
    if(!user || user === null) return router.push(``)
  })
  return (
    <div className="none:container h-screen w-screen flex flex-row bg-blue-dark-navy">
      <Dashboard/>
    </div>
  )
}

export default UserDashboard;
