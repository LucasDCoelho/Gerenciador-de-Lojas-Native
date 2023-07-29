import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"


export interface AuthContextData{
  signIn: (email: string, password: string) => void;
  user: User | null;
}

export interface User extends FirebaseAuthTypes.AdditionalUserInfo {
  
}