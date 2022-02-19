import React from 'react'

export default function Content() {
  return (
    <div className="none:container p-8 h-96 w-full">
      <div className="w-3/4 mx-auto text-center">
        <h3 className="font-extrabold text-blue-light-blue text-4xl mb-2">It's time to ditch Discord and Zoom.</h3>
        <p className="font-normal text-white">All-in-one text and voice chat, just like Discord. Stop paying for Discord boosts and hassling with Zoom.</p>
      </div>
      <div className="none:container flex flex-col mx-auto mt-8  gap-8 w-1/4">
        <button
          type="button"
          className="px-8, py-3 bg-white text-black font-medium text-xs uppercase rounded hover:bg-gray-100 transition duration-150 ease-in-out">
          Login
        </button>
        <button
          type="button"
          className="px-8 py-3 bg-blue-light-blue text-black font-medium text-xs uppercase rounded hover:bg-white transition duration-150 ease-in-out">
          Open comms in your browser
        </button>
      </div>
    </div>
  )
}
