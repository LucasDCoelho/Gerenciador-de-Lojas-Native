import "react-native-gesture-handler";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Go Settings"
          onPress={() => navigation.navigate("settings")}
        />
      </View>
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

export default Home;