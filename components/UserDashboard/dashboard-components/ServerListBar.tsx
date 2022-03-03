import React from 'react'
import { uuid } from 'uuidv4'
interface ServerListBar {
  serverCollection: any,
}
export default function ServerListBar({ serverCollection }:  ServerListBar) {
  return (
    <section className="flex flex-col gap-2 min-w-[72px] h-full bg-[#202225] pt-2 pb-2">
    { serverCollection.map((server: any) => {
      return (
      <div className="flex flex-row justify-between items-center w-100" key={uuid()}>
        <span className="height-[7px] width-[8px] ml-[-5px] bg-white rounded-t rounded-b transition-[height] duration-150 ease-out"/>
        <button className="sidebar-btn">test</button>
      </div>
        )
    })}
  </section>
  )
}
