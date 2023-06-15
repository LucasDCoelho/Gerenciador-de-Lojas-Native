import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../routes/app.routes";

const Login = () => {
  
  const { navigate } = useNavigation();
  const { signedIn, setSignedIn } = React.useContext(AuthContext);
  
  const ValidationAuth =()=>{
    setSignedIn(true)
  }

  React.useEffect(()=>{
    if(!signedIn){
      return  
    }else{
      navigate("home")
    }
  },[signedIn])

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Login</Text>
      <Button Label="Entrar" onPress={ValidationAuth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    marginBottom: 32,
  },
});

export default Login;
