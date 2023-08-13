import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface EventItemProps {
  mode: {
    notas?: string;
    time?: string;
    date?: string;
  };
  label: string;
  name: string;
  onPress?: () => void;
}

export const EventItem = (props: EventItemProps) => {
  const { mode } = props;
  return (
    <TouchableOpacity
      className="flex-row items-center w-full justify-between my-2 border-t-2 border-b-2 py-2 px-2 border-white"
      onPress={props.onPress}>
      <View className="flex-row items-center">
        <FontAwesome5 name={props.name} size={18} color={"#fff"} />
        <Text className="text-white text-lg ml-2">{props.label}</Text>
      </View>
      <View className="border-slate-100 rounded-lg p-2">
        <Text className="text-white text-lg">
          {mode.date
            ? mode.date
            : mode.notas
            ? mode.notas
            : mode.time
            ? mode.time
            : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
