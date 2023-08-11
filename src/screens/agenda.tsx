import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ModalAdicionar } from "../components/Modal";
import { Dropdown } from "../components/UI/dropdown";
import { CalendarEvents } from "../components/Calendar";

const AgendaScreen = () => {
  return (
    <SafeAreaView className="z-10 flex-1 bg-slate-800">
      <View className="">
        <Dropdown />
        <Dropdown />
      </View>
      <CalendarEvents/>
      <ModalAdicionar />
    </SafeAreaView>
  );
};

export default AgendaScreen;
