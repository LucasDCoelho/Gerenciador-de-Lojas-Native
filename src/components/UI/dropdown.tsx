import { useState } from "react";
import { Text, View, FlatList, Pressable } from "react-native";
import "moment/locale/pt-br";
import { ChecklistItens } from "../Checklist/checklist";
import { Ionicons } from "@expo/vector-icons";
import { DropdownProps } from "../../utils/types/checklist";

export const Dropdown = ({ data, label }: DropdownProps) => {
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);

    return (
        <View className={`w-full ${openDropdown ? "flex-1" : ""}`}>
            <Pressable
                className="flex-row items-center"
                onPress={() => setOpenDropdown(!openDropdown)}
            >
                <Text className="text-xl text-white">{label}</Text>
                <Ionicons
                    name={openDropdown ? "chevron-down" : "chevron-up"}
                    size={32}
                    color={"#ffffff"}
                    style={{ marginTop: 5 }}
                />
            </Pressable>

            {openDropdown ? (
                <FlatList
                    data={data}
                    className="w-full"
                    renderItem={({ item }) => (
                        <ChecklistItens
                            isCheck={item.isCheck}
                            key={item.id}
                            text={item.name}
                            color="bg-red-500"
                            date={item.date}
                        />
                    )}
                    ListEmptyComponent={
                        <Text className="text-2xl font-bold text-white">
                            Nada por enquanto...
                        </Text>
                    }
                />
            ) : null}
        </View>
    );
};
