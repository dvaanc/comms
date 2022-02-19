import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Index/Navbar'
import Content from '../components/Index/Content'

const Home: NextPage = () => {
  return (
    <div className="none:container min-h-screen min-w-screen bg-blue-dark-navy">
      <Navbar />
      <Content />
    </div>
  )
}

export default Home
