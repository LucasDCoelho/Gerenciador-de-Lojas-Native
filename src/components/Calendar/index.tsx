import { Text, View } from "react-native";
import { useEffect, useState } from "react";

import { Agenda } from "react-native-calendars";

import { CalendarEventsProps } from "../../utils/types/agenda";
import useFetch from "../../Hooks/useFetch";

import { renderEmptyDate } from "../UI/calendarItems";

export const CalendarEvents = () => {
  const { data, error, loading } = useFetch<CalendarEventsProps[]>({
    method: "GET",
    baseURL: "https://64d536d6b592423e469544ad.mockapi.io/task/tasks",
  });

  useEffect(() => {
    data?.map((item) => console.log(item.name));
  }, [data]);

  return <Agenda ListEmptyComponent={renderEmptyDate} />;
};
