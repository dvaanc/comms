import React from 'react'
import { v4 } from 'uuid'
interface ServerListBar {
  serverCollection: any,
  handleToggleOverlay(e: React.MouseEvent): void
}
export default function ServerListBar({ serverCollection, handleToggleOverlay }:  ServerListBar) {
  return (
    <section className="flex flex-col gap-2 min-w-[72px] h-full bg-[#202225] pt-2 pb-2">
    { serverCollection.map((server: any) => {
      return (
      <div className="flex flex-row items-center w-100" key={v4()}>
        <span className="height-[7px] width-[8px] ml-[-5px] bg-white rounded-full "/>
        <button className="sidebar-btn">test</button>
      </div>
        )
    })}
    <div className="flex flex-row justify-between items-center w-100" key={v4()}>
      <span className="height-[7px] width-[8px] ml-[-5px] bg-white"/>
      <button id="new-server" onClick={handleToggleOverlay} className="sidebar-btn text-3xl text-green-400 font-light hover:text-white hover:bg-green-700">+</button>
    </div>
  </section>
  )
}
