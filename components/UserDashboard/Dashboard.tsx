import React, { DragEventHandler, useState } from 'react'
import Image from 'next/image'
import { uuid } from 'uuidv4'

import { ClickEvent } from 'tsparticles/Options/Classes/Interactivity/Events/ClickEvent'
import ServerListBar from './dashboard-components/ServerListBar'
import ServerChannelListBar from './dashboard-components/ServerChannelListBar'
import ServerChatroomSection from './dashboard-components/ServerChatroomSection'

export default function Dashboard() {
  const [hideSidebar, setHideSibebar] = useState(false as boolean)
  const [hideOverlay, setHideOverlay] = useState(false as boolean)
  const [serverCollection, setServerCollection] = useState([ 'test' ])
  const [serverChatCollection, setServerrChatCollection] = useState([])
  const [voiceControl, setVoiceControl] = useState({ 
    mute: false, 
    deafen: false,
    image: { }
  })
  const handleToggleSidebar = (e: React.MouseEvent) => {
    hideSidebar ? 
      setHideSibebar(false) : setHideSibebar(true)
  }
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
      <div className={`inline-flex flex-row ${ hideSidebar ? `-ml-[318px]` : ``} transition-[margin] duration-600ms z-0`} onDrag={handleDrag} id="sidepanel">
        <ServerListBar serverCollection={serverCollection} />
        <ServerChannelListBar handleToggleSidebar={handleToggleSidebar}/>
      </div>
        <ServerChatroomSection hideSidebar={hideSidebar} handleToggleSidebar={handleToggleSidebar} serverChatCollection={serverChatCollection} />
        <main className={`${hideOverlay ? `hidden pointer-events-none` : `flex pointer-events-none`} fixed w-screen h-screen z-30 top-0 left-0 bg-black/50 transition-all ease-in-out duration-300`}>
          <section className="m-auto flex flex-col w-[350px] h-[400px]  bg-blue-saturated-navy">
            <div>
              
            </div>
            <div>

            </div>
            <div>

            </div>
          </section>
        </main>
    </div>
  )
}
