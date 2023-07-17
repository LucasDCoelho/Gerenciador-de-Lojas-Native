import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { Button } from "../../components/UI/Button";
import NovosDados from "../../utils/Api/reqPost";

export const Event = () => {
  const [date, setDate] = useState(new Date);
  const [mode, setMode] = useState("date");
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const dados = {
    date: date,
    description: title,
    id:"45"
  }

  return (
    <SafeAreaView className="flex-1 px-4 py-10 items-center justify-start bg-slate-800">
      <View className="w-full">
      <Text className="text-2xl text-white font-semibold">Titulo do Evento</Text>
      <TextInput className="border-2 my-2 px-4 py-2 w-full rounded-md" onChangeText={(i) => setTitle(i)}/>
      </View>
      <Button onPress={showDatepicker} Label="Show date picker!" />
      <Button onPress={showTimepicker} Label="Show time picker!" />
      <Text className="text-2xl text-white font-semibold">selected: {date.toLocaleString()}</Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <NovosDados dados={dados}/>
    </SafeAreaView>
  );
};
