import { FontAwesome5 } from '@expo/vector-icons'
import { ScrollView, Text, TextInput, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import CalendarView from "../../components/calendar";
import { useState } from "react";
import Task from '../../utils/Tarefa';

const Home = () => {
  return (
    <View className="flex-1 p-1 bg-slate-800">
      <ScrollView>
        <View>
          <CalendarView />
            <Task mode='Tasks'/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
