import React from 'react'
import Link from 'next/link';
import ContentButton from './content-components/ContentButton';
export default function Content() {
  return (
    <div className="none:container p-8 h-96 w-full">
      <div className="w-3/4 mx-auto text-center">
        <h3 className="font-extrabold text-blue-light-blue text-4xl mb-2">It is time to ditch Discord and Zoom.</h3>
        <p className="font-normal text-white">All-in-one text and voice chat, just like Discord. Stop paying for Discord boosts and hassling with Zoom.</p>
      </div>
      <div className="none:container flex flex-col mx-auto mt-8 gap-8 w-72">
        <ContentButton bgColor="pink-hot-pink" textColor="white" textContent="Login" />
        <ContentButton bgColor="white" textColor="black" textContent="Open Comms in your browser"/>
      </div>
    </div>
  )
}
