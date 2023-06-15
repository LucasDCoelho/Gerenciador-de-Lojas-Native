import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Login</Text>
      <Button Label="Entrar" onPress={() => navigate("home")} />
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
