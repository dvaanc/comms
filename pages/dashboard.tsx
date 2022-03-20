import React from 'react'
import type { NextPage } from 'next'
import Dashboard from '../components/UserDashboard/Dashboard'
const UserDashboard: NextPage = ({ user, addUser }: any) => {
  // useEffect(() => {
  //   console.log(user)
  // },[user])
  return (
    <div className="none:container h-screen w-screen flex flex-row bg-blue-dark-navy">
      <Dashboard user={user}/>
    </div>
  )
}

export default UserDashboard;
