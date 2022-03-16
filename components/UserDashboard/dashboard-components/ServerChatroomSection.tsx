import React from 'react'
import { v4 } from 'uuid'
import chevronSouth from '../../../assets/images/chevron-south.svg'
import Image from 'next/image'
import hamburger from '../../../assets/images/hamburger.svg'
interface ServerChatroomSelection {
  serverChatCollection: any,
  handleToggleSidebar(e: React.MouseEvent ): void,
  hideSidebar: boolean,
}
export default function ServerChatroomSection({ serverChatCollection, handleToggleSidebar, hideSidebar }: ServerChatroomSelection) {
  return (
    <main className="inline-flex flex-col w-full h-full bg-[#36393F] z-10">
    <section className="flex items-center shadow-bottom min-h-[56px] pl-2">
      <span onClick={handleToggleSidebar} className="flex items-center justify-center p-1 cursor-pointer">
        {/* <Image className="-rotate-90" src={hamburger} alt="open sidebar" width="24px" height="24px"/> */}
        <button onClick={handleToggleSidebar} className={`${hideSidebar ? `` : `opened`}`} aria-expanded="true" area-label="hamburger">
          <svg className="stroke-gray-400 fill-[none] stroke-[6px]" width="40" height="40" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </span>
    </section>
    <section className="h-full p-4">
      <div className="h-full w-full">
        { serverChatCollection.map((message: any) => {
          return (
            <div key={v4()}>
                { message }
            </div>
          )
        }) }
      </div>
    </section>
    <form className="min-h-[74px] w-full pl-4 pr-4">
      <div className="flex flex-row items-center bg-[#40444B] w-full min-h-[44px] rounded-lg">
        <div className="flex items-center justify-center min-w-[52px] cursor-pointer">
          +
        </div>
        <input type="text" placeholder="Message" className="w-full h-full outline-none text-gray-200 font-light bg-transparent pr-4" />
      </div>

    </form>
  </main>
  )
}
