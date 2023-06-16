import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { Text, View, TextInput, InputModeOptions } from "react-native";

interface Btn {
  label: string;
  inputIcon: string;
  placeholder: string;
  password?: boolean;
  maxLength?:number;
  inputMode: InputModeOptions | undefined;
}

export const Input = ({ label, inputIcon, inputMode, placeholder, maxLength, password }: Btn) => {
  return (
    <>
      <Text className="text-xl font-bold">{label}</Text>
      <View className="flex-row my-2">
        <FontAwesome5
          name={inputIcon}
          size={23}
          color={"black"}
          style={{ position: "absolute", margin: 10, zIndex:30}}
        />
        <TextInput
          className="border-2 px-10 py-2 rounded-md w-full focus:bg-slate-200 focus:border-rose-800"
          placeholder={placeholder}
          inputMode={inputMode}
          maxLength={maxLength}
          secureTextEntry={password}
        />
      </View>
    </>
  );
};
