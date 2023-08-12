import { useState , useEffect} from 'react'
import { Text, SafeAreaView, ScrollView } from "react-native";
import moment from "moment";

import "moment/locale/pt-br";

import { Dropdown } from "../components/UI/dropdown";
import { ModalAdicionar } from "../components/Modal";
import { useTaskContext } from "../contexts/taskContext";
import { Task } from '../utils/types/checklist';

moment.locale("pt-br");
const Mes = moment().format("MMMM");

const ChecklistScreen = () => {
  const { events } = useTaskContext()

  const [eventToday, setEventToday] = useState<Task[]>([])
  const [eventFuture, setEventFuture] = useState<Task[]>([])
  const [eventHistorie, setEventHistorie] = useState<Task[]>([])

  
  useEffect(()=>{
    const filterCheck = () => {
      let today = events.filter(item => item.isCheck !== true)
      let historie = events.filter(item => item.isCheck !== false)
      console.log() 
      setEventToday(today)
      setEventHistorie(historie)
    }
    filterCheck()
  },[events])


  return (
    <SafeAreaView className="flex-1 justify-start items-start px-2 py-4 bg-slate-800">
      <Text className="text-3xl font-semibold mb-2 text-white">{Mes}</Text>
      <ScrollView className="w-full">
        <Dropdown data={eventToday} label="Hoje" />
        <Dropdown data={eventFuture} label="Futuros" />
        <Dropdown data={eventHistorie} label="Concluidos Hoje" />
      </ScrollView>
      <ModalAdicionar />
    </SafeAreaView>
  );
};

export default ChecklistScreen;
