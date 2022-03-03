import React from 'react'
import { uuid } from 'uuidv4'
interface ServerChatroomSelection {
  serverChatCollection: any,
}
export default function ServerChatroomSection({ serverChatCollection }: ServerChatroomSelection) {
  return (
    <main className="flex flex-col w-full h-full bg-[#36393F]">
    <section className="shadow-bottom min-h-[56px]">

    </section>
    <section className="h-full p-4">
      <div className="h-full w-full">
        { serverChatCollection.map((message: any) => {
          return (
            <div key={uuid()}>
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
