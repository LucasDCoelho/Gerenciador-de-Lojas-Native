import { Pressable, Text, View } from "react-native";

export const DeleteModal = () => {
  return (
    <>
      <Pressable className="z-40 absolute w-screen h-screen  justify-center items-center px-6 bottom-0 left-0 bg-[#00000060]">
        <View className="z-50 absolute w-full h-auto py-4 px-4 bg-white rounded-lg">
          <Text className="text-lg">Excluir tarefa?</Text>
          <View className="flex-row w-full justify-end">
            <Text className="text-lg p-2 text-white bg-red-800 rounded-lg mx-1 my-2">Deletar</Text>
            <Text className="text-lg p-2 text-white bg-slate-800 rounded-lg mx-1 my-2">Cancelar</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};
