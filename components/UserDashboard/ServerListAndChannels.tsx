import React, { useState } from 'react'
import { uuid } from 'uuidv4'

export default function ServerListAndChannels() {
  const [serverCollection, setServerCollection] = useState([
    'test',
  ])
  const selectServer = () => {
    console.log('server clicked')
  }
  return (
    <div className="inline-flex flex-row h-screen w-64 bg-[#202225] z-10">
      <div className="flex flex-col gap-2 w-16 bg-white ">
        { serverCollection.map((server: any) => {
          return (
          <div className="flex flex-row justify-between items-center w-100 bg-blue-600" key={uuid()}>
            <span className="height-[7px] width-[8px] ml-[-5px] bg-white rounded-t rounded-b transition-[height] duration-150 ease-out"/>
            <button 
              className="sidebar-btn"
              onClick={selectServer}
              >
                test
            </button>
          </div>
            )
        })}
      </div>
      <div>

      </div>
    </div>
  )
}
