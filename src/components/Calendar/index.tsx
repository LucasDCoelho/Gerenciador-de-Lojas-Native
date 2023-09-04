import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import "moment/locale/pt-br";
import { useStore } from "../../Hooks/useStore";


LocaleConfig.locales["pt-br"] = {
  monthNames: moment.months(),
  monthNamesShort: moment.monthsShort(),
  dayNames: moment.weekdays(),
  dayNamesShort: moment.weekdaysShort(),
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-br";

interface Task {
  title: string;
}

export const CalendarEvents: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const { dateValue, inputValue } = useStore()
  console.log(dateValue)
  console.log(selectedDate)
  console.log(inputValue)

  const formatDate = (date: Date): string => {
    return moment(date).utc().format("YYYY-MM-DD");
  };


  const getTasksForDate = (date: string): Task[] => {
    const tasks: Record<string, Task[]> = {
      dateValue: [{ title: inputValue }],
    };

    const adjustedDate = moment.utc(date).format("YYYY-MM-DD");
    return tasks[adjustedDate] || [];
  };

  const renderTasks = (): JSX.Element => {
    const tasks = getTasksForDate(selectedDate);
    if (tasks.length === 0) {
      return (
        <></>
      );
    }

    return (
      <>
        {tasks.map((task, index) => (
          <Text key={index} style={styles.taskText}>
            {task.title}
          </Text>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day) =>
          setSelectedDate(formatDate(new Date(day.dateString)))
        }
        markedDates={{
          [selectedDate]: { selected: true, disableTouchEvent: true },
        }}
      />
      <Text style={styles.tasksHeader}>Tarefas para {selectedDate}</Text>
      {selectedDate === String(dateValue.toISOString()) ? (
        <View style={styles.tasksContainer}>
          {renderTasks()}
        </View>
      ) : (
        <>
          <Text style={styles.noTasksText}>
            Não há tarefas marcadas para este dia.
          </Text>
        </>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgb(30 41 59)",
    color: "white",
  },
  tasksContainer: {
    marginTop: 20,
  },
  tasksHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  noTasksText: {
    fontStyle: "italic",
    color: "gray",
  },
  taskText: {
    marginBottom: 5,
    color: "white",
  },
});