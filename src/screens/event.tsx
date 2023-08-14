import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState, useEffect } from "react";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useTaskContext } from "../contexts/taskContext";

import { Task } from "../utils/types/checklist";
import { Button } from "../components/UI/Button";
import { EventItem } from "../components/UI/eventItem";

interface RoutesParam {
  taskId: string;
}

const EventScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<Record<string, RoutesParam>>>();

  const { EditTask, events } = useTaskContext();

  const [event, setEvent] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<any | undefined>("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const saveTask = () => {
    EditTask(params.taskId, input, "green", "2013");
    goBack();
  };

  useEffect(() => {
    const filter = (id: string) => {
      const UpdateEvent = events.filter((item) => item.id === id);
      setEvent(UpdateEvent);
    };
    filter(params.taskId);
  }, []);

  return (
    <View className="flex-1 justify-start items-center p-4 bg-slate-800">
      {event.map((item) => {
        return (
          <View className="w-full items-start" key={item.id}>
            {/* button editar categoria */}
            <Pressable className="mb-3 flex-row items-center text-md bg-slate-100 px-4 py-2 rounded-lg">
              <Text className="mr-1">sem categorias</Text>
              <Ionicons name="chevron-down" size={16} />
            </Pressable>

            {/* Input Editar tarefa */}
            <View className="border-2 border-slate-700 w-full h-56 rounded-lg my-2 overflow-hidden">
              <TextInput
                autoFocus
                defaultValue={item.name}
                inputMode="text"
                onChangeText={(e) => setInput(e)}
                className="text-white text-xl px-4 py-2 w-full h-auto"
                numberOfLines={2}
              />
            </View>
            {/* buttons para configurar as datas da tarefa*/}
            <EventItem
              name="calendar-alt"
              mode={{ date: moment(item.date).format("L") }}
              label="data de vencimento"
              onPress={()=> setShow(true)}
            />
            <EventItem
              name="clock"
              mode={{ time: moment(item.date).format("LT") }}
              label="hora"
            />
            <EventItem
              name="file-alt"
              mode={{ notas: "Editar" }}
              label="descrição"
            />

            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                // is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        );
      })}
      <Button Label="Salvar" onPress={saveTask} />
    </View>
  );
};

export default EventScreen;
