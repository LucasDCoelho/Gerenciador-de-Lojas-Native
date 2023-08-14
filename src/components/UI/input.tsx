<<<<<<< HEAD
import React, { useState} from 'react'
import FontAwesome5 from "@expo/vector-icons/FontAwesome5"
import { StyledComponent } from 'nativewind';
=======
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
>>>>>>> b68538666caa0d2f22db8cfa1e37313a1c84d9d8
import { Text, View, TextInput, InputModeOptions } from "react-native";

interface InputProps {
  label: string;
  inputIcon: string;
  placeholder: string;
  password?: boolean;
  maxLength?: number;
  inputMode?: InputModeOptions;
  value?: string;
  changeText: (text: string) => void;
}

<<<<<<< HEAD
export const Input = ({ label, inputIcon, inputMode, placeholder, maxLength, password, value, changeText }: InputProps) => {

=======
export const Input = (props: InputProps) => {
  const { inputIcon, label, placeholder, inputMode, maxLength, password } = props
>>>>>>> b68538666caa0d2f22db8cfa1e37313a1c84d9d8
  return (
    <>
      <Text className="text-xl font-bold text-white">{label}</Text>
      <View className="flex-row my-2">
        <FontAwesome5
          name={inputIcon}
          size={23}
          color={"black"}
          style={{ position: "absolute", margin: 10, zIndex: 40 }}
        />
        <TextInput
          className="border-2 px-14 py-2 rounded-md bg-slate-200 w-full focus:bg-slate-200 focus:border-rose-800"
          placeholder={placeholder}
          inputMode={inputMode}
          maxLength={maxLength}
          secureTextEntry={password}
          value={value}
          onChangeText={changeText}
        />
      </View>
    </>
  );
};
