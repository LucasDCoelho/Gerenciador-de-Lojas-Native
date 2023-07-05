import React, { useEffect, useState } from "react";
import { View, StyleProp, ViewStyle, Alert } from "react-native";
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

const CalendarView: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(['']);

 

  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate])

  return (
    <View className="scale-95">
      
    </View>
  );
};

export default CalendarView;