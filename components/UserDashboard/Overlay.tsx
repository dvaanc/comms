import React, { useState } from 'react'
import cross from '../../assets/images/cross.svg'
import Image from 'next/image'
import arrow from '../../assets/images/arrow.png'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { db } from '../../backend/firebaseConfig'
import { v4 } from 'uuid'
interface OverlayProps {
  hideOverlay: boolean
  handleToggleOverlay(e: React.MouseEvent): void
}
export default function Overlay({ hideOverlay, handleToggleOverlay }: OverlayProps) {
  const [serverValue, setServerValue] = useState({ serverName: '', serverJoin: '', actionType: '' })
  const [errors, setErros] = useState({ serverName: false, serverJoin: false })
  const handleInputChange = (e: { target: HTMLInputElement }): void => {
    console.log(serverValue)
    setServerValue({ ...serverValue, [e.target.id]: e.target.value })
  }
  const handleServerForm = (e: React.FormEvent) => {
    e.preventDefault()
    const target =  e.target as HTMLInputElement
    console.log(e)
  }
  const createNewServer = async() => {
    console.log(serverValue.serverName)
    const serverId = v4()
    const serverRef = await setDoc(doc(db, 'server-collection', serverId),  {
      serverName: serverValue.serverName,
      creationDate: Timestamp.now(),
      serverID: serverId,
    })
    const noCategoryRef = await setDoc(doc(db, `server-collection/${serverId}/text-channels/categories/`, 'no-category'), { categoryId: v4() })
    const textChannelsCategoryREf = await setDoc(doc(db, `server-collection/${serverId}/text-channels/categories/`, 'text-channels'), { categoryId: v4() })
    const generalChannelRef = await setDoc(doc(db, `server-collections/${serverId}/text-channels/categories/text-channels`), {
      
    })
  } 
  const joinServer = () => {
    console.log(serverValue.serverJoin)
  }
  

  return (
    <main id="overlay" onClick={handleToggleOverlay} className={`${hideOverlay ? `pointer-events-none opacity-0` : `pointer-events-all opacity-100`} fixed w-full h-full z-30 bg-black/50 transition-[opacity] ease-in-out duration-600`}>
      <section className="absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] bg-blue-saturated-navy p-6 text-gray-200">
        <button id="close-new-server" onClick={handleToggleOverlay} className="absolute right-5"  >
          <Image id="close-new-server" src={cross} alt="close form" height="22px" width="22px"/>
        </button>
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-blue-light-blue">Create Guild</h3>
          <p className="text-sm">Create an epic guild, hang out with your friends.</p>
        </div>
        <div id="serverName" className="flex flex-col mb-3 w-full">
          <div>
            <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="serverName">Server Name:</label>
            <div className="flex flex-row">
              <input 
                className="min-w-[80%] border border-black/30 rounded py-3 px-3 mr-2 text-gray-300 leading-tight outline-none focus:border-input-focus hover:border-input-hover bg-input-bg transition-colors ease-in-out duration-200" 
                type="text"
                id="serverName"
                value={serverValue.serverName}
                placeholder="Server Name"
                // {...register("username"), { required: true, }}
                onChange={handleInputChange}
              />
              <button
                // type="submit"
                onClick={createNewServer}
                value="newServer"
                className="flex items-center text-center px-3 border border-gray-400 rounded font-semibold text-white cursor-pointer hover:bg-green-600 transition-colors duration-150 ease-out"
              >
                <Image src={arrow} alt="submit-server-name"className="stroke-white"/>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-blue-light-blue">Have an invite already?</h3>
          <p className="text-sm">Join one.</p>
        </div>
        <div id="serverJoin" className="flex flex-col mb-3 w-full">
          <div>
            <label className="block pl-1 text-gray-300 text-sm font-bold mb-2" htmlFor="serverJoin">Server Join:</label>
            <div className="flex flex-row">
              <input 
                className="min-w-[80%] border border-black/30 rounded py-3 px-3 mr-2 text-gray-300 leading-tight outline-none focus:border-input-focus hover:border-input-hover bg-input-bg transition-colors ease-in-out duration-200" 
                type="text"
                id="serverJoin"
                value={serverValue.serverJoin}
                placeholder="Join Link"
                // {...register("username"), { required: true, }}
                onChange={handleInputChange}
              />
              <button
                // type="submit"
                onClick={joinServer}
                value="serverJoin"
                className="flex items-center text-center px-3 border border-gray-400 rounded font-semibold text-white cursor-pointer hover:bg-green-600 transition-colors duration-150 ease-out"
                // formAction='/joinServer'
              >
                <Image src={arrow} alt="submit-join-server" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
