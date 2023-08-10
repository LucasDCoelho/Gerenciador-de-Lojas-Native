import React, { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Custom Hooks
import { useAuth } from "../hooks/useAuth";

//Components
import { Input } from "../components/UI/input";
import { Button } from "../components/UI/Button";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const { signIn, isValidEmail, isUserValid } = useAuth()
  const navigation = useNavigation()
  

  const handleSignIn: ()=> Promise<void> = async () => {
    setError(null)

    try {
      if (!email || !password) {
        setError("Preencha todos os campos...")
        return;
      }

      if(!isValidEmail(email)){
        setError("Por favor insira um email válido.")
        return;
      }

      if(!isUserValid(email, password)){
        setError("Usuário não encontrado.")
        return;
      }
      

      await signIn(email, password)
      navigation.navigate("home")

    } catch (error) {
      handleError((error) as FirebaseAuthTypes.NativeFirebaseAuthError)
    }
  }

  
  const handleError = (error: FirebaseAuthTypes.NativeFirebaseAuthError) => {
    if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
      setError("Usuário ou senha incorretos");
    } else if (error.code === "auth/invalid-email") {
      setError("Email inválido");
    } else {
      setError("Ocorreu um erro em fazer o login. Tente novamente mais tarde.");
    }
  }
  
  
  return (
    <View className="flex-1 p-8 justify-center items-center bg-black">
      <View className="w-full justify-between p-4 m-4 rounded-md border-2 border-rose-800  items-center bg-black">
        <Text className="text-4xl text-white">Divino Fogão</Text>
        <Text className="text-2xl my-4 font-bold text-white">Login</Text>
        <View>
          <Input
            label="Email"
            inputIcon="user-alt"
            inputMode="email"
            placeholder="email@gmail.com"
            value={email}
            changeText={setEmail}
          />
          <Input
            label="Senha"
            inputIcon="lock"
            inputMode="numeric"
            placeholder="*******"
            maxLength={8}
            password={true}
            value={password}
            changeText={setPassword}
          />
        </View>
        <Button
          Label="Entrar"
          onPress={handleSignIn}
        />

        {error && <Text className="text-red-500 mt-2">{error}</Text>}
      </View>
    </View>
  );
};

export default Login;
