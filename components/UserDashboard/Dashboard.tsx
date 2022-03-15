import React, { DragEventHandler, useEffect, useState } from 'react'
import Image from 'next/image'
import { uuid } from 'uuidv4'

import { ClickEvent } from 'tsparticles/Options/Classes/Interactivity/Events/ClickEvent'
import ServerListBar from './dashboard-components/ServerListBar'
import ServerChannelListBar from './dashboard-components/ServerChannelListBar'
import ServerChatroomSection from './dashboard-components/ServerChatroomSection'
import Overlay from './Overlay'

export default function Dashboard() {
  const [user, setUser] = useState({})
  const [hideSidebar, setHideSibebar] = useState(false as boolean)
  const [hideOverlay, setHideOverlay] = useState(true as boolean)
  const [serverCollection, setServerCollection] = useState([] as Array<any>)
  const [serverChatCollection, setServerrChatCollection] = useState([])
  const [voiceControl, setVoiceControl] = useState({ 
    mute: false, 
    deafen: false,
    image: { }
  })
  useEffect(() => {
    
  }, [])
  const handleToggleSidebar = () => {
    hideSidebar ? 
      setHideSibebar(false) : setHideSibebar(true)
  }
  const handleToggleOverlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    const target = e.target as HTMLElement
    if(target.id === 'new-server') return setHideOverlay(false)
    if(target.id ==='close-new-server') return setHideOverlay(true)
    if(target.id === 'overlay') return setHideOverlay(true)
    // hideOverlay ?
    //   setHideOverlay(false) : setHideOverlay(true)
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
        <ServerListBar serverCollection={serverCollection} handleToggleOverlay={handleToggleOverlay}/>
        <ServerChannelListBar handleToggleSidebar={handleToggleSidebar}/>
      </div>
        <ServerChatroomSection hideSidebar={hideSidebar} handleToggleSidebar={handleToggleSidebar} serverChatCollection={serverChatCollection} />
        <Overlay hideOverlay={hideOverlay} handleToggleOverlay={handleToggleOverlay} />
    </div>
  )
}
