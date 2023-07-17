import React, { useEffect } from 'react';
import {SafeAreaView } from 'react-native'
import { DataEvent, renderEmptyDate, renderItem } from '../../utils/Calendar';
import { Agenda } from 'react-native-calendars';
import { ModalAdicionar } from '../../components/Modal';

const Home = () => {
  const { eventsCalendar } = DataEvent();

  useEffect(() => {
    console.log(eventsCalendar)
  }, []);

  return (
    <SafeAreaView className="z-10 flex-1 bg-slate-800">
      <Agenda
        items={eventsCalendar}
        renderItem={renderItem}
        renderEmptyData={renderEmptyDate}
        showClosingKnob={true}
      />
      <ModalAdicionar />
    </SafeAreaView>
  );
};

export default Home;
