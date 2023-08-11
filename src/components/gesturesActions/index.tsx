import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable } from "react-native";

export const renderRightActions = () => {
    return (
        <Pressable className="w-32 h-36 mt-1 justify-center items-center rounded-lg bg-red-800">
            <FontAwesome5 name="trash" size={32} color={"white"} />
        </Pressable>
    );
};