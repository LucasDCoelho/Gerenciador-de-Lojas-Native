import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

const Dasboard = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Dasboard</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Dasboard;