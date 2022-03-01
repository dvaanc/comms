import React, { useState } from 'react'
import { uuid } from 'uuidv4'
import hash from '../../assets/images/hash.svg'
import chevronSouth from '../../assets/images/chevron-south.svg'
import Image from 'next/image'

export default function ServerListAndChannels() {
  const [serverCollection, setServerCollection] = useState([
    'test',
  ])
  const selectServer = () => {
    console.log('server clicked')
  }
  return (
    <div className="inline-flex flex-row h-screen bg-white z-10">
      <div className="flex flex-col gap-2 w-[72px] bg-[#202225] pt-2 pb-2">
        { serverCollection.map((server: any) => {
          return (
          <div className="flex flex-row justify-between items-center w-100" key={uuid()}>
            <span className="height-[7px] width-[8px] ml-[-5px] bg-white rounded-t rounded-b transition-[height] duration-150 ease-out"/>
            <button className="sidebar-btn" onClick={selectServer}>test</button>
          </div>
            )
        })}
      </div>
      <div className="flex flex-col w-64 bg-[#2f3136]">
        <div className="w-100 h-12 pl-4 pr-4 flex items-center justify-between text-white font-medium text-m tracking-medium shadow-bottom hover:bg-[#34373C] cursor-pointer">
          <h4>Server Test</h4>
          <Image className="" src={chevronSouth} alt="chevronSouth" width="22px" height="22px" />
        </div>
        <div className="flex flex-col pt-4 p-2 ">
          <span className="flex items-center justify-start cursor-pointer uppercase">
            <Image src={chevronSouth} alt="chevronSouth" width="18px" height="18px" />
            <h5 className="text-xs text-[#72767D] hover:text-gray-200 font-bold">Text Channels</h5>
          </span>
          <span className="flex items-center w-100 h-8 p-2 hover:bg-[#34373C] rounded-md cursor-pointer text-[#72767D] hover:text-white">
            <Image src={hash} alt="hash" width="20px" height="20px"/>
            <h5 className="ml-1 font-sm tracking-medium text-m">general</h5>
          </span>

        </div>
      </div>
    </div>
  )
}
