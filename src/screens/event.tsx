import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { useTaskContext } from "../contexts/taskContext";
import { Task } from "../utils/types/checklist";

interface RoutesParam {
  taskId: string;
}

const EventScreen: React.FC = () => {
  const { params } = useRoute<RouteProp<Record<string, RoutesParam>>>();
  const { EditTask, events } = useTaskContext();
  const [event, setEvent] = useState<Task[]>([]);

  useEffect(() => {
    console.log(params.taskId);

    const filter = (id: string) => {
      const UpdateEvent = events.filter((item) => item.id === id);
      setEvent(UpdateEvent);
    };
    filter(params.taskId);
    // EditTask(params?.taskId, "HELLO")
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-slate-800">
      {event.map((item) => {
        return (
          <View>
            <Text className="text-white text-4xl">{item.id}</Text>
            <Text className="text-white text-4xl">{item.name}</Text>
            <Text className="text-white text-4xl">{item.date}</Text>
            <Text className="text-white text-4xl">{item.isCheck}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default EventScreen;
