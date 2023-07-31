export interface AuthContextData{
  signIn: (email: string, password: string) => Promise<void>;
  signOut: ()=> Promise<void>;
  user: User | null;
  isValidEmail: (email: string) => boolean;
  isUserValid: (email: string, password: string) => Promise<boolean>
}

export type ValidEmail = `${string}@${string}.${string}`;

export interface User  {
  uid: string;
  email: string | null;
}