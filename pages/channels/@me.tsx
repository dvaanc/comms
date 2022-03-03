import React from 'react'
import type { NextPage } from 'next'
import ServerListAndChannels from '../../components/UserDashboard/ServerListAndChannels';
import ServerChatRoomSection from '../../components/UserDashboard/dashboard-components/ServerChatroomSection';
const UserDashboard: NextPage = () => {
  return (
    <div className="none:container h-screen w-screen flex flex-row bg-blue-dark-navy">
      <ServerListAndChannels/>
    </div>
  )
}

export default UserDashboard;
