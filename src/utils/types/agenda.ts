import { AgendaEntry } from "react-native-calendars";

export interface DataEventProps {
    [date: string]: AgendaEntry[]
}

export interface CalendarEventsProps {
    id: string;
    date: Date;
    name: string;
    height: number;
}