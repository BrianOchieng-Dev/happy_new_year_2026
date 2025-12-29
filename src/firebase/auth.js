
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, //this is established to check is user signup = signin credentials
    signOut
} from 'firebase/auth'

import {auth} from '../firebase/firebase.js'
//sign up authentication
export const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}
//signin
export const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}

//signout
export const logoutUser = () => {
  return signOut(auth);
};"firebase/auth";
