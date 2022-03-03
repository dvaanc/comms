import React from 'react'
import type { NextPage } from 'next'
import Dashboard from '../../components/UserDashboard/Dashboard'
const UserDashboard: NextPage = () => {
  return (
    <div className="none:container h-screen w-screen flex flex-row bg-blue-dark-navy">
      <Dashboard/>
    </div>
  )
}

export default UserDashboard;
