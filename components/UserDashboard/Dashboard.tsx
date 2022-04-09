import React, { DragEventHandler, useEffect, useState } from 'react'
import Image from 'next/image'

import { ClickEvent } from 'tsparticles/Options/Classes/Interactivity/Events/ClickEvent'
import ServerListBar from './dashboard-components/ServerListBar'
import ServerChannelListBar from './dashboard-components/ServerChannelListBar'
import ServerChatroomSection from './dashboard-components/ServerChatroomSection'
import Overlay from './Overlay'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth, db, storage } from '../../backend/firebaseConfig'
import { ref } from 'firebase/storage'
import { useRouter } from 'next/router'
import { collection, doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import { UserProps } from '../../pages/_app'
interface ServerDataProps {
  creationDate: {
    nanoseconds: number,
    seconds: number,
  } | null,
  serverName: null | string,
  serverId: null | string,
}
interface ServerChannelProps {
  textChannels: [

  ]
}

export default function Dashboard({ user }: any) {
  const router = useRouter()
  // const [currentUser, setCurrentUser] = useState({ 
  //   uid: null as null | any,
  //   username: '' as string,
  //   tag: null as null | number,
  //   profile: null as any,
  //   serverList: [] as Array<string>
  // })
  const [hideSidebar, setHideSibebar] = useState(false as boolean)
  const [hideOverlay, setHideOverlay] = useState(true as boolean)
  const [serverChatCollection, setServerChatCollection] = useState([])
  const [currentServerData, setCurrentServerData] = useState({
    serverId: null,
    creationDate: null,
    serverName: null,
  } as any)
  const [currentServerChannels, setCurrentServerChannels] = useState(null as Array<any> | null)
    // useEffect(() => {
    //   console.log(currentServerData)
    // }, [currentServerData])
    // useEffect(() => {
    //   console.log(textChannels)
    // }, [textChannels])
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
  const handleSetCurrentServer = async (serverId: string) => {
    const serverRef = doc(db, `server-collection`,  serverId)
    const serverTextCategoriesRef = collection(db, `server-collection/${serverId}/text-channels/`)
    const data = [] as Array<any>
    const serverSnap = await getDoc(serverRef)
    const serverData = await serverSnap.data()
    if(serverData!.serverId === currentServerData.serverId) return
    const serverTextCategoriesSnap = await getDocs(serverTextCategoriesRef)
    serverTextCategoriesSnap.forEach((doc) => {
      const { categoryId } = doc.data()
      const categoryName = doc.id
      data.push({ categoryName, categoryId, display: true, channels: [] as Array<any> })
    })
    data.forEach(async (item, i) => {
      const serverTextCategoriesRef = collection(db, `server-collection/${serverId}/text-channels/${item.categoryName}/channels/`)
      const serverTextCategoriesSnap = await getDocs(serverTextCategoriesRef)
      serverTextCategoriesSnap.forEach((doc) => {
        if (!doc.exists())
          return
        const channelName = doc.id
        const channelData = doc.data()
        item.channels.push({ channelName, ...channelData })
      })
      setCurrentServerChannels([...data])
    })
    setCurrentServerData({ ...serverData })

  }
  return (
    <div className="inline-flex flex-row h-screen w-screen bg-white fixed">
      <div className={`inline-flex flex-row ${ hideSidebar ? `-ml-[318px]` : ``} transition-[margin] duration-600ms z-0`} onDrag={handleDrag} id="sidepanel">
        <ServerListBar 
          serverCollection={user.serverCollection} 
          handleToggleOverlay={handleToggleOverlay}
          handleSetCurrentServer={handleSetCurrentServer}
        />
        <ServerChannelListBar 
          user={user} 
          handleToggleSidebar={handleToggleSidebar}
          currentServerData={currentServerData}
          currentServerChannels={currentServerChannels}
        />
      </div>
        <ServerChatroomSection 
          hideSidebar={hideSidebar} 
          handleToggleSidebar={handleToggleSidebar} 
          serverChatCollection={serverChatCollection} 
        />
        <Overlay 
          hideOverlay={hideOverlay} 
          handleToggleOverlay={handleToggleOverlay} 
          uid={user.uid} 
        />
        <button onClick={ () => { signOut(auth); router.push('/login') } }className="fixed w-[50px] h-[50px] bottom-1 left-3 bg-red-900 rounded-full">
          Logout
        </button>
    </div>
  )
}

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if(user) setCurrentUser({...currentUser, uid: user.uid}) ; setIsLoaded(true)
  //     if(!user || user === null) return router.push('/login')
  //   })
  // }, [])

  // useEffect(() => {
  //   const fetchUserInfo = async(uid: string) => {
  //     const storageRef = ref(storage, `user-assets/${uid}/userProfile.png`)
  //     const profileSnap = await getDoc(doc(db, 'user-collection', uid))
  //     if(profileSnap.exists()) {
  //       const { username, tag, profile } = profileSnap.data()
  //       setCurrentUser({ ...currentUser, username, tag, profile })
  //       return
  //     }
  //     console.log('No user found')
  //   }
  //   if(isLoaded) { 
  //     fetchUserInfo(currentUser.uid) 
    
  //   }
  // }, [isLoaded])
  // useEffect(() => {
  //   if(currentUser.uid === null) return
  //   const unsub = onSnapshot(doc(db, 'user-collection', currentUser.uid), (doc) => { 
  //     const data = doc.data( )
  //     if(data !== undefined ) setCurrentUser({...currentUser, serverList: [...data.serverList]})
  //   })
  //   return () => unsub()
  // })

  // useEffect(() => {
  //   console.log(currentUser)
  // }, )
