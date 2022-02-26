import React from 'react'
import type { NextPage } from 'next'
import ServerChannelListSection from '../../components/UserDashboard/ServerChannelListSection';
import ServerChatRoomSection from '../../components/UserDashboard/ServerChatRoomSection';
import UserServerListSection from '../../components/UserDashboard/UserServerListSection';
const UserDashboard: NextPage = () => {
  return (
    <div className="none:container min-h-screen min-w-screen flex flex-row bg-blue-dark-navy">
      <UserServerListSection />
      <ServerChannelListSection />
      <ServerChatRoomSection />
    </div>
  )
}

export default UserDashboard;
