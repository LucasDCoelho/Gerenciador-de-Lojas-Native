import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { AgendaEntry } from "react-native-calendars";
import { useFetch } from "../Api/useFetch";

export const renderEmptyDate = () => {
  return (
    <View className="p-4 flex-1">
      <Text>Não há eventos neste dia</Text>
    </View>
  );
};

export const renderItem = ({ ...item }: AgendaEntry) => {
  return (
    <View className="rounded-lg border-2 p-4 my-1 mx-3">
      <View className="flex-1">
        <Text className="font-bold text-black">{item.name}</Text>
        <Text className="text-gray-500">{item.day}</Text>
      </View>
    </View>
  );
};

interface DataEventProps {
  [date: string]: AgendaEntry[];
}

export const DataEvent = () => {
  const [apiEvents, setApiEvents] = useState([]);
  const [eventsCalendar, setEventsCalendar] = useState<DataEventProps>({});

  const {fetchData } = useFetch(
    "https://64d536d6b592423e469544ad.mockapi.io/task/tasks"
  );
  
  useEffect(() => {
    if (fetchData) {
      setApiEvents(fetchData);
    }
  }, [fetchData]);

  useEffect(() => {
    if (apiEvents.length > 0) {
      const newEventsCalendar = { ...eventsCalendar };

      apiEvents.forEach((event:any) => {
        const date = event.date.split("T")[0];
        const name = event.name;
        const time = event.date.split("T")[1].split(".")[0];
        const height = event.height;
        const id = event.id;

        if (newEventsCalendar[date]) {
          const eventExists = newEventsCalendar[date].some(
            (existingEvent) => existingEvent.id === id
          );

          if (!eventExists) {
            newEventsCalendar[date].push({ id, name, day: time, height });
          }
        } else {
          newEventsCalendar[date] = [{ id, name, day: time, height }];
        }
      });

      setEventsCalendar(newEventsCalendar);
    }
  }, [apiEvents]);

  return { eventsCalendar, setEventsCalendar };
};
