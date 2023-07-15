import "react-native-gesture-handler";
import Icon from "@expo/vector-icons/FontAwesome";
import { Text, View } from "react-native";
import { Button } from "../../components/UI/Button";

const Settings = () => {
  return (
    <View className="flex-1 px-20 justify-center items-center">
      <View className="w-full p-4 rounded-md bg-slate-500">
        <View className="flex-row items-start">
          <Icon name={"trash"} size={23} color={"white"} />
          <Text className="text-slate-300 ml-4">Delete This Store</Text>
        </View>
        <Text className="w-full text-slate-300 my-4" numberOfLines={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni culpa officiis laboriosam consequatur, officia, eos et perferendis deserunt dolores reiciendis saepe debitis. Ad, enim eos deleniti repellendus earum ducimus culpa?
        </Text>
        <Button Label="Delete Store" />
      </View>
    </View>
  );
};
export default Settings;
