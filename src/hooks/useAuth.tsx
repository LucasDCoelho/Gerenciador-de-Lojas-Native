import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"

import { User, ValidEmail } from "../types/Authenticate";

interface AuthProviderProps{
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [ user, setUser ] = useState<User | null>(null)

  const isValidEmail = (email: string): email is ValidEmail =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const signIn = async (email: string, password: string) => {
    try{
      await auth().signInWithEmailAndPassword(email, password)
      console.log("usuario logado")
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = async () =>{
    setUser(null)
  }

  const isUserValid = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      return true; // Se não houver erro ao fazer login, o usuário existe
    } catch (error) {
      const firebeseError = error as FirebaseAuthTypes.NativeFirebaseAuthError
      if (firebeseError.code === "auth/user-not-found") {
        return false;
      } else {
        throw error;
      }
    }
  }



  useEffect(()=>{
    const unsubscribed = auth().onAuthStateChanged((userAuth)=>{
      if(userAuth){
        const { uid, email } = userAuth;
        setUser({ uid, email })
      } else {
        setUser(null)
      }
    })

    return () => unsubscribed()
  },[])

  return(
    <AuthContext.Provider value={{ signIn , signOut , user, isValidEmail, isUserValid }}>
      {children}
    </AuthContext.Provider>
  )
}


export function useAuth(){
  const context = useContext(AuthContext)
  if(!context){
    console.log("useAuth tem que ser usado com um AuthPorvider")
  }
  return context;
}