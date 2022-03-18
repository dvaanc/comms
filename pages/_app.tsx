import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../backend/firebaseConfig'

export interface UserProps {
  uid: string,
  username: string,
  tag: number,
  profile: string,
  serverList: Array<string>
}

export interface Props {
  user: {
    uid: string,
    username: string,
    tag: number, 
    profile: string,
    serverList: Array<string>,
  },
  addUser: (userId: string) => void,
}

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(undefined as UserProps | undefined)

  const addUser = async(userId: string) => {
    // setUser({...user, uid: userId}) 
    try {
      const profileSnap = await getDoc(doc(db, 'user-collection', userId))
      if(profileSnap.exists()) {
        const { username, tag, profile, serverList } = profileSnap.data()
        setUser({ ...user, uid: userId, username, tag, profile, serverList })
        return
      }
      console.log('could not find user in database')
    } catch(err) {
      err instanceof Error && 
        console.error(err)
    }
  }

  return (
    <Component 
      { ...pageProps } 
      user={ user } 
      addUser={ addUser }
    />
  )
}

export default MyApp
