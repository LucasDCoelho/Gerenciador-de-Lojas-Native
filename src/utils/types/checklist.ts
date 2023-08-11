import { CalendarEventsProps } from "./agenda";

export interface Task extends CalendarEventsProps{
    isCheck?:boolean
}
export interface DropdownProps {
    data: Task[] | null;
    label: string;
}

export interface ChecklistItensProps {
    color: string;
    text: string;
    date: string;
    isCheck?: boolean;
}