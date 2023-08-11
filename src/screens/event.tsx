import React, { useEffect, useState } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";

const EventScreen = () => {
  return (
    <SafeAreaView className="flex-1 px-4 py-10 items-center justify-start bg-slate-800">
      <View className="w-full">
        <Text className="text-2xl text-white font-semibold">
          Titulo do Evento
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EventScreen