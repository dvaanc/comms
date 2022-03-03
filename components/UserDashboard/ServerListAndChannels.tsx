import React, { DragEventHandler, useState } from 'react'
import Image from 'next/image'
import { uuid } from 'uuidv4'

import { ClickEvent } from 'tsparticles/Options/Classes/Interactivity/Events/ClickEvent'
import ServerListBar from './dashboard-components/ServerListBar'
import ServerChannelListBar from './dashboard-components/ServerChannelListBar'
import ServerChatroomSection from './dashboard-components/ServerChatroomSection'

export default function ServerListAndChannels() {
  const [serverCollection, setServerCollection] = useState([ 'test' ])
  const [serverChatCollection, setServerrChatCollection] = useState([])
  const [voiceControl, setVoiceControl] = useState({ 
    mute: false, 
    deafen: false,
    image: { }
  })
  const selectServer = () => {
    console.log('server clicked')
  }
  const toggleVoiceControl = (e: ClickEvent): void => { 

  }
  const handleDrag = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement
    console.log('drag')
  }
  return (
    <div className="inline-flex flex-row h-screen w-screen bg-white fixed">
      <div className="inline-flex flex-row" onDrag={handleDrag} id="sidepanel z-0">
        <ServerListBar serverCollection={serverCollection} />
        <ServerChannelListBar />
      </div>
      <div className="inline-flex w-full z-10">
        <ServerChatroomSection serverChatCollection={serverChatCollection} />
        <main>

        </main>
      </div>
    </div>
  )
}
