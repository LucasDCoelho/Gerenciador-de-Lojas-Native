import "react-native-gesture-handler";
import  Icon  from '@expo/vector-icons/FontAwesome'
import { Text, View } from "react-native";
import { Button } from "../../components/Button";

const Settings = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="p-4 rounded-md bg-slate-500">
        <View className="flex-row items-start">
          <Icon name={'trash'} size={23} color={'white'}/>
          <Text className="text-slate-300 ml-4">Delete This Store</Text>
        </View>
          <Text className="w-48 text-slate-300 my-4" numberOfLines={3}>Lorem ipsum dolor sit ame adipisicing elit. Ut in voluptas numquam accusamus a</Text>
          <Button Label="Delete Store"/>
      </View>
    </View>
  );
};
export default Settings;
