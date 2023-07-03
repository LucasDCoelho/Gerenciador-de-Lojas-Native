import React, { useState } from "react";
import { View, StyleProp, ViewStyle, Alert } from "react-native";
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';


type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface CalendarViewProps {
  style?: CustomStyleProp;
}



const CalendarView: React.FC<CalendarViewProps> = ({ style }) => {

  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View className="scale-95">
      <DatePicker
      selected={getFormatedDate(new Date(), 'DD/MM/YYYY')}
      onDateChange={day =>(Alert.alert(day))}
      options={{
        backgroundColor:'#881337',
        borderColor:'#000',
        textHeaderColor:'#fff', //header color
        textSecondaryColor:'#fff',//semana
        selectedTextColor:'#fff', //selecao numero
        mainColor:'#000', //circulo
        textDefaultColor:'#fff', //numeros
      }}
      mode="calendar"
      />
    </View>
  );
};

export default CalendarView;