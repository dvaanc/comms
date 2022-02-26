import { signInWithEmailAndPassword, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const login = async(email: string, password: string) => {
  try { const user = await signInWithEmailAndPassword(auth, email, password) } 
  catch (error) {
    if(error instanceof Error) return console.log(error);
  }
}
// const providerSignIn = async(auth: any, provider: any) => {
//   try { 

//   }
// }

const logout = async () => {
  try { await signOut(auth) } 
  catch (error) {
    if(error instanceof Error) return console.log(error);
  }
}

export { login, logout }