import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Image, Text, View, Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import { ChecklistItensProps } from "../../utils/types/checklist";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export const ChecklistItens = (props: ChecklistItensProps) => {
  const { color, date, text, isCheck, deleteItem, editItem, onValueChange } = props;
  const [value, setValue] = useState<boolean>(isCheck!);

  const renderRightActions = () => {
    return (
      <Pressable className="w-32 h-36 mt-1 justify-center items-center rounded-lg bg-red-800" onPress={deleteItem}>
        <FontAwesome5 name="trash" size={32} color={"white"} />
      </Pressable>
    );
  };

  return (
    <GestureHandlerRootView className="w-full">
      <Swipeable renderRightActions={renderRightActions}>
        <Pressable className="relative w-full px-2 h-36 justify-center bg-white shadow-lg my-1 rounded-lg" onPress={editItem}>
          <View className={`w-full h-8 rounded-t-lg mb-2 ${color}`}/>

          <View className="flex-row items-center mb-2">
            <Checkbox
              value={value}
              color={"#000"}
              onValueChange={onValueChange}
            />

            <Text
              className={`ml-2 ${value ? "line-through" : ""}`}
              numberOfLines={2}>
              {text}
            </Text>
          </View>

          <View className="flex-row items-center gap-1 ">
            <Ionicons name="calendar" color={"#000"} size={23} />
            <Text>{date}</Text>
          </View>

          <View className="absolute w-12 h-12 justify-center items-center border-2 border-slate-500 object-contain rounded-full bottom-0 right-0 m-2">
            <Text className="text-black text-xl">B</Text>
          </View>
        </Pressable>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
