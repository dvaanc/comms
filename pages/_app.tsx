import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { auth, db } from '../backend/firebaseConfig'
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth'

export interface UserProps {
  uid: string,
  username: string,
  tag: number,
  profile: string,
  serverList: Array<string>
  serverCollection: Array<any>
}

export interface Props {
  user: {
    uid: string,
    username: string,
    tag: number, 
    profile: string,
    serverList: Array<string>,
    serverCollection: Array<any>
  },
  addUser: (userId: string) => void,
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [user, setUser] = useState(undefined as UserProps | undefined)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) addUser(user.uid) ; router.push('/dashboard')
      if(!user) router.push('/login')
    })
  }, [])

  useEffect(() => {
    if(user && user.serverList) {
      const serversRef = collection(db, 'server-collection')
      const q = query(serversRef, where('serverID', 'in', [...user.serverList]))
      const unsubscribe = onSnapshot(q, (snap) => {
        snap.docs.forEach((doc) => {  } )
      })
    }
  }, [user])

  const addUser = async(userId: string) => {
    try {
      const profileSnap = await getDoc(doc(db, 'user-collection', userId))
      if(profileSnap.exists()) {
        const { username, tag, profile, serverList } = profileSnap.data()
        const serverCollection = [] as Array<any>
        // const serversRef = collection(db, "server-collection")
        // const q = query(serversRef, where('serverID', 'in', [...serverList]))
        // const qSnapshot = await getDocs(q)
        //   qSnapshot.forEach((doc) => { serverCollection.push(doc.data())})
        setUser({ ...user, uid: userId, username, tag, profile, serverList, serverCollection })
        return
      }
      console.log('could not find user in database')
    } catch(err) {
      err instanceof Error && 
        console.error(err)
    }
  }
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Component 
      { ...pageProps } 
      user={ user } 
      addUser={ addUser }
    />
  )
}

export default MyApp
