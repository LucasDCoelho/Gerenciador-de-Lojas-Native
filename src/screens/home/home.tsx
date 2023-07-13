import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Agenda, AgendaEntry } from 'react-native-calendars';
import { calendarTheme } from '../../utils/styles';
import { ModalAdicionar } from '../../components/Modal';
import { EventContext } from '../../routes/app.routes';

interface Event extends AgendaEntry {
  title: string;
  time: string;
}


const Home = () => {
  const { isOpenModal, setIsOpenModal } = React.useContext(EventContext)
  const events: { [date: string]: Event[] } = {
    '2023-07-12': [{ title: 'Reunião 1', time: '10:00' }],
    '2023-07-13': [{ title: 'Reunião 2', time: '10:00' }],
    '2023-07-14': [
      { title: 'Reunião 2', time: '14:00' },
      { title: 'Reunião 3', time: '15:30' },
      { title: 'Reunião 4', time: '15:35' },
    ],
  };
  const renderEmptyDate = () => {
    return (
      <View className='p-4 flex-1'>
        <Text>Não há eventos neste dia</Text>
      </View>
    );
  };
  const renderItem = ({ ...item }) => {
    return (
      <View className='rounded-lg p-4 my-4 mx-1 border-2'>
        <View className='flex-1'>
          <Text className='font-bold'>{item.title}</Text>
          <Text className='text-gray-500'>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (

    
      <SafeAreaView className='flex-1 bg-slate-500'>
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
