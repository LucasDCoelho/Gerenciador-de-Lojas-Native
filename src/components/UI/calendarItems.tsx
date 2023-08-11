import { Text, View } from "react-native";

export const renderEmptyDate = () => {
    return (
      <View className="p-4 flex-1">
        <Text>Não há eventos neste dia</Text>
      </View>
    );
  };
  
  export const renderItem = ({ ...item }) => {
    return (
      <View className="rounded-lg border-2 p-4 my-1 mx-3">
        <View className="flex-1">
          <Text className="font-bold text-black">{item.name}</Text>
          <Text className="text-gray-500">{item.day}</Text>
        </View>
      </View>
    );
  };