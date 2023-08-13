import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Swipeable } from "react-native-gesture-handler";
import moment from "moment";

import Checkbox from "expo-checkbox";
import { Text, View, Pressable } from "react-native";
import Reanimated, {
  LightSpeedInLeft,
  LightSpeedOutRight,
} from "react-native-reanimated";

import { ChecklistItensProps } from "../../utils/types/checklist";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export const ChecklistItens = (props: ChecklistItensProps) => {
  const { color, date, text, isCheck, deleteItem, editItem, onValueChange } =
    props;

  const renderRightActions = () => {
    return (
      <Pressable
        className="w-24 h-auto my-[3px] justify-center items-center rounded-lg bg-red-800"
        onPress={deleteItem}>
        <FontAwesome5 name="trash" size={32} color={"white"} />
      </Pressable>
    );
  };

  return (
    <>
      <GestureHandlerRootView className="w-full">
        <Swipeable renderRightActions={renderRightActions}>
          <Reanimated.View
            entering={LightSpeedInLeft}
            exiting={LightSpeedOutRight}>
            <Pressable
              className="relative w-full px-2 py-4 justify-center bg-slate-200 shadow-lg my-1 rounded-lg"
              onPress={editItem}>
              <View className="absolute top-0 right-0 mr-5">
                <Ionicons name="md-bookmark" size={23} color={color? color : 'blacks'} />
              </View>
              <View className="flex-row items-center mb-2">
                <Checkbox
                  value={isCheck!}
                  color={"#000"}
                  onValueChange={onValueChange}
                />

                <Text
                  className={`w-4/5 ml-2 ${isCheck ? "line-through" : ""}`}
                  numberOfLines={1}>
                  {text}
                </Text>
              </View>

              <View className="flex-row items-center gap-1 ">
                <Ionicons name="calendar" color={"#000"} size={23} />
                <Text>{moment(date).calendar()}</Text>
              </View>

              <View className="absolute w-12 h-12 justify-center items-center border-2 border-black rounded-full bottom-0 right-0 m-2">
                <Text className="text-black text-xl">BS</Text>
              </View>
            </Pressable>
          </Reanimated.View>
        </Swipeable>
      </GestureHandlerRootView>
    </>
  );
};
