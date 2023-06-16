import "react-native-gesture-handler";
import { ScrollView, Text, View } from "react-native";
import { Calendar } from "../../components/calendar";

const Home = () =>{
  return (
<View className="flex-1 p-2 bg-slate-500">
  <Calendar/>
  <ScrollView horizontal>
  <View className="w-32 bg-black border border-white mx-1"/>
  <View className="w-32 bg-black border border-white mx-1"/>
  <View className="w-32 bg-black border border-white mx-1"/>
  <View className="w-32 bg-black border border-white mx-1"/>
  </ScrollView>
  <Text className="text-2xl font-bold text-white bg-slate-800 text-center p-2 mx-2 rounded-md my-2">Tarefas</Text>
  <Text className="text-base font-bold text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perspiciatis eveniet. Quas perferendis fugit cumque quo est eaque? Beatae esse quidem aliquam reiciendis nihil harum optio veritatis, repellat fugiat voluptas?</Text>
  <Text className="text-2xl font-bold text-white bg-slate-800 text-center p-2 mx-2 rounded-md my-2">Lembretes</Text>
  <Text className="text-base font-bold text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perspiciatis eveniet. Quas perferendis fugit cumque quo est eaque? Beatae esse quidem aliquam reiciendis nihil harum optio veritatis, repellat fugiat voluptas?</Text>
</View>
  );
}

export default Home