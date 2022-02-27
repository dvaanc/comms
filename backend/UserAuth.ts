import { signInWithEmailAndPassword, GoogleAuthProvider, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { doc, setDoc } from 'firebase/firestore'

const register = async(email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    // await setDoc(doc(db, "user-collection", user.uid), {

    // })
    return true
  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message)
      return error.message
    }
  }
}

const login = async(email: string, password: string) => {
  try { const user = await signInWithEmailAndPassword(auth, email, password) } 
  catch (error) {
    if(error instanceof Error) return console.log(error)
  }
}
// const providerSignIn = async(auth: any, provider: any) => {
//   try { 

//   }
// }

const logout = async () => {
  try { await signOut(auth) } 
  catch (error) {
    if(error instanceof Error) return console.log(error)
  }
}

export { login, logout, register }