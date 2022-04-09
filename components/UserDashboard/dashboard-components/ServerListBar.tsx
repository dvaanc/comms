import React, { useEffect } from 'react'
import { v4 } from 'uuid'
interface ServerListBar {
  serverCollection: any,
  handleToggleOverlay(e: React.MouseEvent): void,
  handleSetCurrentServer(serverId: string): Promise<void>,
}
export default function ServerListBar({ serverCollection, handleToggleOverlay, handleSetCurrentServer }:  ServerListBar) {
  const handleServerClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    const serverId = (target.parentNode as HTMLElement).dataset.serverid
    if(serverId) handleSetCurrentServer(serverId)
  }
  // useEffect(() => {
  //   console.log(serverCollection)
  // }, [serverCollection])
  return (
    <section className="flex flex-col gap-2 min-w-[72px] h-full bg-[#202225] pt-2 pb-2">
    { serverCollection && serverCollection.map((server: any) => {
      const initials = server.serverName.split(' ').map((str: string) => str.substring(0, 1))
      return (
      <div className="flex flex-row items-center w-100" key={v4()} data-serverid={ server.serverId }>
        <span className="height-[7px] width-[8px] ml-[-5px] bg-white rounded-full "/>
        <button onClick={ handleServerClick } data-id="test" className="sidebar-btn text-white select-none">{ initials }</button>
      </div>
        )
    })}
    <div className="flex flex-row justify-between items-center w-100" key={v4()}>
      <span className="height-[7px] width-[8px] ml-[-5px] bg-white"/>
      <button id="new-server" onClick={ handleToggleOverlay } className="sidebar-btn text-3xl text-green-400 font-light hover:text-white hover:bg-green-700">+</button>
    </div>
  </section>
  )
}
