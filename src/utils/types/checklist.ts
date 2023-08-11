import { CalendarEventsProps } from "./agenda";

export interface Task extends CalendarEventsProps{
}
export interface DropdownProps {
    data: Task[];
    label: string;
}

export interface ChecklistItensProps {
    color: string;
    text: string;
    date: string;
}