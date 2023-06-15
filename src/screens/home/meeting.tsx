import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

const Meeting = () =>{
  return (
      <View style={styles.container}>
        <Text>Meeting</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Meeting