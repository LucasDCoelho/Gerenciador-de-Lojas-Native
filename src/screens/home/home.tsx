import * as React from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import Task from '../../utils/Tarefa';

const Home = () => {
  const [selectedDate, setSelectedDate] = React.useState('');

  const SelectDate = (day: string) => {
    setSelectedDate(day)
  }

  const dataTask = [{
    '13/07/2023': [
      {
        id: 1,
        name: 'l',
        descriptions: "Fazer Compras2"
      },
      {
        id: 2,
        name: 'n',
        descriptions: "Fazer Compras1"
      },
      {
        id: 3,
        name: 'b',
        descriptions: "Fazer Compras5"
      },
    ],
    '14/07/2023': [
      {
        id: 1,
        name: 'j',
        descriptions: "virar presidente"
      },
      {
        id: 2,
        name: 'f',
        descriptions: "dancar"
      },
      {
        id: 3,
        name: 's',
        descriptions: "comer bobs"
      },
    ],
  }]

  const datas = selectedDate;
  const dateParts = datas.split("/");
  const day = dateParts[2];


  React.useEffect(() => {
  }, [selectedDate]);

  return (
    <SafeAreaView className="flex-1 p-1 bg-slate-800">
      <ScrollView>
        <View className="scale-95">
          <DatePicker
            selected={getFormatedDate(new Date(), 'DD/MM/YYYY')}
            onDateChange={day => SelectDate(day)}
            options={{
              backgroundColor: '#881337',
              borderColor: '#000',
              textHeaderColor: '#fff', //header color
              textSecondaryColor: '#fff',//semana
              selectedTextColor: '#fff', //selecao numero
              mainColor: '#000', //circulo
              textDefaultColor: '#fff', //numeros
            }}
            mode="calendar"
          />
        </View>
        {
          dataTask.map((item: any) => {
            return (
              <>
                <Task mode='Tasks' data={item[`${day}/07/2023`]} key={day} />
                <Task mode='Lembretes' data={item[`${day}/07/2023`]} key={day+1} />
              </>
            )
          })
        }

      </ScrollView>
    </SafeAreaView >
  );
};

export default Home;
