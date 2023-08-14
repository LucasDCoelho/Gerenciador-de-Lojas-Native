import { createContext } from "react";

//types
import { AuthContextData } from "../types/Authenticate";

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export default AuthContext;

