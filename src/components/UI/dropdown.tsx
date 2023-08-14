import "moment/locale/pt-br";

import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from "@expo/vector-icons";

import { ChecklistItens } from "../Checklist/checklist";
import { DropdownProps } from "../../utils/types/checklist";
import { useTaskContext } from "../../contexts/taskContext";

export const Dropdown = ({ data, label }: DropdownProps) => {
  const { navigate } = useNavigation()
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const { DeleteTask, handleCheckboxChange } = useTaskContext();

  const EditarItem = (params: string) =>{
    navigate("events", {taskId: params})
  }

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
        ? data!.slice().reverse().map((item) => (
            <ChecklistItens
              key={item.id}
              date={item.date}
              color={item.color}
              text={item.name}
              isCheck={item.isCheck}
              onValueChange={() => handleCheckboxChange(item.id)}
              deleteItem={() => DeleteTask(item.id)}
              editItem={()=> EditarItem(item.id)}
            />
          ))
        : null}
    </View>
  );
};
