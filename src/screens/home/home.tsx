import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { Agenda, AgendaSchedule } from "react-native-calendars";

import { useFetch } from "../../utils/Api/useFetch";
import { calendarTheme } from "../../utils/styles";
import { ModalAdicionar } from "../../components/Modal";
import { EventContext } from "../../routes/app.routes";

// interface Event extends AgendaSchedule {
//   title: string;
//   time: string;
// }

const renderEmptyDate = () => {
  return (
    <View className="p-4 flex-1">
      <Text>Não há eventos neste dia</Text>
    </View>
  );
};

const renderItem = ({ ...item }) => {
  return (
    <View className="rounded-lg p-4 my-4 mx-1 border-2">
      <View className="flex-1">
        <Text className="font-bold">{item.title}</Text>
        <Text className="text-gray-500">{item.time}</Text>
      </View>
    </View>
  );
};

const Home = () => {
  
  const { fetchData, errorResponse } = useFetch(
    "https://rickandmortyapi.com/api/character/?page=100"
  );
  
  React.useEffect(() => {
    console.log(errorResponse)
  }, []);

  const { isOpenModal, setIsOpenModal } = React.useContext(EventContext);
  const events: AgendaSchedule = {
    "2023-07-12": [{ name: "Reunião 1", day: "10:00", height: 80 }],
    "2023-07-13": [{ name: "Reunião 2", day: "10:00", height: 80 }],
    "2023-07-14": [
      { name: "Reunião 2", day: "14:00", height: 80 },
      { name: "Reunião 3", day: "15:30", height: 80 },
      { name: "Reunião 4", day: "15:35", height: 80 },
    ],
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-500">
      <Agenda
        theme={calendarTheme}
        items={events}
        renderEmptyData={renderEmptyDate}
        renderItem={renderItem}
      />
      <ModalAdicionar isOpen={isOpenModal} />
    </SafeAreaView>
  );
};

export default Home;
