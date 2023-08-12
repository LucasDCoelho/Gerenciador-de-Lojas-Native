import "moment/locale/pt-br";

import { useState } from "react";
import { Text, View, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { ChecklistItens } from "../Checklist/checklist";
import { DropdownProps } from "../../utils/types/checklist";
import { useTaskContext } from "../../contexts/taskContext";

export const Dropdown = ({ data, label }: DropdownProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const { DeleteTask, EditTask, handleCheckboxChange } = useTaskContext();

  return (
    <View className={`w-full ${openDropdown ? "h-auto" : ""}`}>
      <Pressable
        className="flex-row items-center"
        onPress={() => setOpenDropdown(!openDropdown)}>
        <Text className="text-xl text-white">{label}</Text>
        <Ionicons
          name={openDropdown ? "chevron-down" : "chevron-up"}
          size={32}
          color={"#ffffff"}
          style={{ marginTop: 5 }}
        />
      </Pressable>

      {openDropdown
        ? data!.map((item) => (
            <ChecklistItens
              key={item.id}
              date={item.date}
              color="bg-red-500"
              text={item.name}
              isCheck={item.isCheck}
              onValueChange={() => handleCheckboxChange(item.id)}
              deleteItem={() => DeleteTask(item.id)}
              editItem={() => EditTask(item.id)}
            />
          ))
        : null}
    </View>
  );
};
