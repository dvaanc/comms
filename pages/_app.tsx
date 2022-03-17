import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, setCurrentUser] = useState(null as null | string)
  const addUser = (user: string) => {
    
  }
  console.log('hello')
  return (
    <Component 
      {...pageProps} 
      currentUser={currentUser} 
    />
  )
}

export default MyApp
