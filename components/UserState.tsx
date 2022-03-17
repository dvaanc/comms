import { doc, getDoc } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { db } from "../backend/firebaseConfig";

interface State {
  uid: string,
  username: string,
  tag: number,
  profile: string,
  serverList: Array<string>
}
type Dispatch = () => void
type AddUser = (uid: string) => void
const UserContext = createContext<{state: State; dispatch: Dispatch, addUser: AddUser } | undefined>(undefined)

export default function UserState( children: React.FC) {
  const [user, setUser] = useState({
    uid: '',
    username: '',
    tag: 0, 
    profile: '',
    serverList: [],
  } as State)

  const addUser = async(userId: string) => {
    setUser({...user, uid: userId}) 
    try {
      const profileSnap = await getDoc(doc(db, 'user-collection', userId))
      if(profileSnap.exists()) {
        const { username, tag, profile, serverList } = profileSnap.data()
        setUser({ ...user, username, tag, profile, serverList })
        return
      }
      console.log('could not find user in database')
    } catch(err) {
      err instanceof Error && 
        console.error(err)
    }
  }

  const value = { user, setUser, addUser}

  return (
    <UserContext.Provider value={value}>
      { children }
    </UserContext.Provider>
  )
}
