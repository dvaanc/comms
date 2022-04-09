import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import hash from '../../../assets/images/hash.svg'
import chevronSouth from '../../../assets/images/chevron-south.svg'
import unmute from '../../../assets/images/unmute.svg'
import undeafen from '../../../assets/images/undeafen.svg'
import settings from '../../../assets/images/settings.svg'
import cross from '../../../assets/images/cross.svg'
import { v4 } from 'uuid'
import ServerCategoryItem from './ServerCategoryItem'
interface ServerChannelListBarProps {
  user: any,
  handleToggleSidebar(e: React.MouseEvent ): void,
  currentServerChannels: any,
  currentServerData: any,

}
export default function ServerChannelListBar({  user, currentServerChannels, handleToggleSidebar, currentServerData }: ServerChannelListBarProps) {
  const { username, profile, tag } = user
  const [textChannels, setTextChannels] = useState(null as any)
  const [voiceChannels, setVoiceChannels] = useState([])
  const { serverName, serverId, creationDate } = currentServerData
  useEffect(() => {
    if(currentServerChannels === null) return
    setTextChannels([...currentServerChannels])
    // console.log(currentServerChannels)
    return () => setTextChannels({})
  }, [currentServerChannels])
  // useEffect(() =>  {
  //   console.log(textChannels)
  // }, [textChannels])
  
  return (
    <main className="flex flex-col min-w-[246px] bg-[#2f3136] h-full">
      <section className="min-h-[56px] pr-4 flex items-center justify-between text-white font-medium text-m tracking-medium shadow-bottom">
        <div className="flex items-center gap-2 pl-4 pr-4 hover:bg-[#34373C] cursor-pointer h-full">
          <h4>{serverName !== null && serverName }</h4>
          
        </div>
        <div className="flex items-center cursor-pointer">
          {/* <Image src={cross} alt="close hamburger" width="22px" height="22px" /> */}
          <Image src={chevronSouth} alt="chevronSouth" width="22px" height="22px" />
        </div>
        
      </section>
      <section className="flex flex-col pt-4 p-2 h-full">
        { textChannels !== null && textChannels.map((item: any) => {
          return (
            <ServerCategoryItem key={v4()} category={ item } serverId={ serverId }/>
          )
          
        }) }


      </section>
      <section className="w-100 min-h-[58px] pl-4 pr-4 flex items-center justify-between bg-[#292b2f]">
        <div className="flex flex-row gap-2 items-center">
          <span className="h-[34px] w-[34px] rounded-full cursor-pointer overflow-hidden">
            { profile && <Image src={profile} height="32px" width="32px" layout="responsive" alt="profile picture" />}
            
          </span>
          <span className="flex flex-col tracking-wide pt-2 cursor-pointer">
            <h6 className="font-medium text-sm text-white leading-none">{ username }</h6>
            <p className="text-xs text-gray-300">#{ tag }</p>
          </span>
        </div>
        <div className="flex flex-row gap-1 items-center bg-blue">
          <span className="rounded-md cursor-pointer hover:bg-[#34373C] flex items-center p-1">
            <Image src={unmute} alt="unmute" id="unmute" height="22px" width="22px"/>
          </span>
          <span className="rounded-md cursor-pointer hover:bg-[#34373C] flex items-center p-1">
            <Image src={undeafen} alt="unmute" id="unmute" height="22px" width="22px"/>
          </span>
          <span className="rounded-md cursor-pointer hover:bg-[#34373C] flex items-center p-1">
            <Image src={settings} alt="unmute" id="unmute" height="22px" width="22px"/>
          </span>
        </div>
      </section>
      {/* <section className="aboslute top-1/2 right-0 min-h-[52px] min-w-[52px] bg-white z-20">
        test
          </section> */}
  </main>
  )
}
