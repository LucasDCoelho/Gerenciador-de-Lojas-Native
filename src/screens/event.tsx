import moment from "moment";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

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
  // recebe os parametros
  const { goBack } = useNavigation();
  const { params } = useRoute<RouteProp<Record<string, RoutesParam>>>();

  // contextos
  const { EditTask, useStore } = useTaskContext();
  const { events, colorValue, dateValue, setDateValue } = useStore();

  // states
  const [event, setEvent] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  const [openDateTime, setOpenDateTime] = useState<boolean>(false);
  const [openHoursTime, setOpenHoursTime] = useState<boolean>(false);

  // salvar evento
  const saveTask = () => {
    EditTask({
      id: params.taskId,
      newColor: colorValue,
      newDateAndTime: dateValue,
      newName: input,
    });
    goBack();
  };

  const DateTime = ({ nativeEvent }: DateTimePickerEvent) => {
    setOpenDateTime(false);
    setDateValue(new Date(nativeEvent?.timestamp!));
  };

  const HoursTime = ({ nativeEvent }: DateTimePickerEvent) => {
    setOpenHoursTime(false);
    setDateValue(new Date(nativeEvent?.timestamp!));
  };

  useEffect(() => {
    const filter = (id: string) => {
      const UpdateEvent = events.filter((item) => item.id === id);
      setEvent(UpdateEvent);
    };
    filter(params.taskId);
    console.log(dateValue);
  }, [dateValue]);

  return (
    <View className="flex-1 justify-start items-center p-4 bg-slate-800">
      {event.map((item) => {
        return (
          <View className="w-full items-start" key={item.id}>
            <Pressable className="mb-3 flex-row items-center text-md bg-slate-100 px-4 py-2 rounded-lg">
              <Text className="mr-1">sem categorias</Text>
              <Ionicons name="chevron-down" size={16} />
            </Pressable>
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
            <EventItem
              name="calendar-alt"
              mode={{
                date: dateValue
                  ? moment(dateValue).format("L")
                  : moment(item.date).format("L"),
              }}
              label="data de vencimento"
              onPress={() => setOpenDateTime(true)}
            />
            {openDateTime && (
              <DateTimePicker
                value={dateValue}
                mode="date"
                onChange={DateTime}
              />
            )}
            <EventItem
              name="clock"
              mode={{
                time: dateValue
                  ? moment(dateValue).format("LT")
                  : moment(item.date).format("LT"),
              }}
              label="hora"
              onPress={() => setOpenHoursTime(true)}
            />
            {openHoursTime && (
              <DateTimePicker
                value={dateValue}
                mode="time"
                onChange={HoursTime}
              />
            )}
            <EventItem
              name="file-alt"
              mode={{ notas: "Editar" }}
              label="descrição"
            />
          </View>
        );
      })}
      <Button Label="Salvar" onPress={saveTask} />
    </View>
  );
};

export default EventScreen;
