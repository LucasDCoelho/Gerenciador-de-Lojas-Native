import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import "moment/locale/pt-br";

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

  const formatDate = (date: Date): string => {
    return moment(date).utc().format("YYYY-MM-DD");
  };
  

  const getTasksForDate = (date: string): Task[] => {
    const tasks: Record<string, Task[]> = {
      "2023-08-13": [{ title: "Tarefa 1" }, { title: "Tarefa 2" }],
      "2023-08-12": [{ title: "Tarefa 3" }],
      "2023-09-01": [{ title: "Tarefa 4" }],
    };
  
    const adjustedDate = moment.utc(date).format("YYYY-MM-DD");
    return tasks[adjustedDate] || [];
  };

  const renderTasks = (): JSX.Element => {
    const tasks = getTasksForDate(selectedDate);
    if (tasks.length === 0) {
      return (
        <Text style={styles.noTasksText}>
          Não há tarefas marcadas para este dia.
        </Text>
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

      <View style={styles.tasksContainer}>
        <Text style={styles.tasksHeader}>Tarefas para {selectedDate}</Text>
        {renderTasks()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tasksContainer: {
    marginTop: 20,
  },
  tasksHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  noTasksText: {
    fontStyle: "italic",
    color: "gray",
  },
  taskText: {
    marginBottom: 5,
  },
});