import "react-native-gesture-handler";
import { Image, Text, View } from "react-native";

const NotFound = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl mb-10">Tô trabalhando nisso...</Text>
      <Image source={require("../../assets/work-in-progress.png")} className="w-32 h-32"/>
    </View>
  );
};

export default NotFound;