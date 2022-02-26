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
      <div className="flex flex-row mx-auto mt-8 gap-8 w-72">
        <Link href="/login" passHref>
          <button className="px-6 py-3 bg-blue-blue text-white font-medium text-s uppercase rounded-full hover:scale-110 transition duration-150 ease-in-out">
            Login
          </button>
        </Link>
        <Link href="/register" passHref>
          <button className="px-8 py-3 bg-pink-hot-pink text-white font-medium text-s uppercase rounded-full hover:scale-110 transition duration-150 ease-in-out">
            Register
          </button>
        </Link>
      </div>
      <div className="flex flex-row mx-auto mt-8 gap-8 w-72">
        
      </div>
    </div>
  )
}
