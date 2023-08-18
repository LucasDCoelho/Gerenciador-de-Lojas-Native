import moment from "moment";
import "moment/locale/pt-br";

import { useState, useEffect } from "react";
import { Text, SafeAreaView, ScrollView } from "react-native";

import { Dropdown } from "../components/UI/dropdown";
import { ModalAdicionar } from "../components/Modal";
import { useTaskContext } from "../contexts/taskContext";
import { Task } from "../utils/types/checklist";

const ChecklistScreen = () => {
  const Mes = moment().format("MMMM");
  const { useStore } = useTaskContext();

  const { events } = useStore();

  const [eventPass, setEventPass] = useState<Task[]>([]);
  const [eventToday, setEventToday] = useState<Task[]>([]);
  const [eventFuture, setEventFuture] = useState<Task[]>([]);
  const [eventHistorie, setEventHistorie] = useState<Task[]>([]);
  
  useEffect(() => {
    const filterCheck = () => {
      const today = new Date();
      
      const PassEvents = events.filter((item) => {
        return !item.isCheck && new Date(item.date) < today;
      });

      const todayEvents = events.filter((item) => {
        return !item.isCheck && new Date(item.date) === today;
      });
      
      const futureEvents = events.filter((item) => {
        return !item.isCheck && new Date(item.date) > today;
      });

      const checkedEvents = events.filter((item) => item.isCheck);
      
      setEventPass(PassEvents)
      setEventToday(todayEvents);
      setEventFuture(futureEvents);
      setEventHistorie(checkedEvents);
    };  
    filterCheck();
  }, [events]);
  
  

  return (
    <SafeAreaView className="flex-1 justify-start items-start px-2 py-4 bg-slate-800">
      <Text className="text-3xl font-semibold mb-2 text-white">{Mes}</Text>
      <ScrollView className="w-full">
        {eventPass.length ? <Dropdown data={eventPass} label="Passados" /> : null}
        {eventToday.length ? <Dropdown data={eventToday} label="Hoje" /> : null}
        {eventFuture.length ? <Dropdown data={eventFuture} label="Futuros" /> : null}
        {eventHistorie.length ?<Dropdown data={eventHistorie} label="Concluidos Hoje" /> : null}
      </ScrollView>
      <ModalAdicionar />
    </SafeAreaView>
  );
};

export default ChecklistScreen;
