import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import auth from "@react-native-firebase/auth"

import { User } from "../types/Authenticate";

interface AuthProviderProps{
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [ user, setUser ] = useState<User | null>(null)

  const signIn = (email: string, password: string) => {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then((result)=>{
      console.log(result)
      const authenticatedUser: User = {username} ;
      setUser(authenticatedUser)
    })
    .catch((error)=>{
      console.error(error)
    })
  }

  return(
    <AuthContext.Provider value={{ signIn , user }}>
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