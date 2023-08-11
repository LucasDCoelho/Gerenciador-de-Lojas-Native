import { Text, View, Image, ScrollView } from "react-native";
import { ChecklistItens } from "../components/UI/checklist";
import { ModalAdicionar } from "../components/Modal";

const ChecklistScreen = () => {
  return (
    <View className="flex-1 justify-center items-center px-4 bg-slate-800">
      <Text className="text-3xl font-semibold mb-4 text-white">Novembro</Text>
      <View className="w-full py-4 my-2 items-center justify-center bg-slate-900 rounded-lg">
        <Text className="text-xl text-white">Primeira semana V</Text>
      </View>
      <ChecklistItens
        date="19/NOV"
        text="texto importante"
        color={"bg-red-500"}
      />
      <ChecklistItens
        date="19/NOV"
        text="texto pouco importante"
        color={"bg-amber-500"}
      />
      <ChecklistItens
        date="19/NOV"
        text="texto pouco importante"
        color={"bg-green-500"}
      />
      <ModalAdicionar />
    </View>
  );
};

export default ChecklistScreen