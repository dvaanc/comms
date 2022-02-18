import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Index/Navbar'


const Home: NextPage = () => {
  return (
    <div className="none:container min-h-screen bg-blue-dark-navy">
      <Navbar />
    </div>
  )
}

export default Home
