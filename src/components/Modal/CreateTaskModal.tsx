import { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../UI/Button";
import { useTaskContext } from "../../contexts/taskContext";

interface EditModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateTaskModal = ({ open, setOpen }: EditModalProps) => {
  const { createTask, inputValue, setInputValue } = useTaskContext()
  
  if (open) {
    return (
      <>
        <TouchableOpacity
          className="z-40 absolute  border-white w-screen h-screen bottom-0 left-0 justify-end bg-[#00000060]"
          onPress={() => setOpen(!open)}
        />
        <View className="z-50 absolute w-screen h-auto bottom-0 px-2 py-4 rounded-t-2xl bg-slate-600">
          <TextInput
            className="w-full border-2 px-4 py-6 rounded-2xl text-white border-white"
            defaultValue={inputValue}
            onChangeText={(e)=> setInputValue(e)}
            autoFocus
            placeholder="nova tarefa"
          />
          <View className="flex-row">
            <Pressable className="mt-3 w-auto active:bg-red-500 text-md bg-white px-2 py-1 rounded-lg">
              <Text>sem categorias</Text>
            </Pressable>
            <Pressable className="mt-3 ml-2 active:bg-slate-500 w-auto text-md bg-white px-2 py-1 rounded-lg">
              <Text>cor</Text>
            </Pressable>
            <Pressable className="mt-3 ml-2 active:bg-slate-500 w-auto text-md bg-white px-2 py-1 rounded-lg">
              <Text>sub-categoria</Text>
            </Pressable>
          </View>
          <Button Label="Criar tarefa" onPress={createTask}/>
        </View>
      </>
    );
  } else return null;
};
